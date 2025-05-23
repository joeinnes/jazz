"use client";

import type { Toc, TocEntry } from "@stefanprobst/rehype-extract-toc";
import { clsx } from "clsx";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

const TocList = ({
  items,
  level,
  currentId,
}: { items: Toc; level: number; currentId: string }) => {
  const isActive = (item: TocEntry) => {
    if (!item.id) return false;
    if (item.id === currentId) return true;
    if (item.children) {
      return item.children.some(isActive);
    }
    return false;
  };

  return (
    <ul style={{ paddingLeft: level > 0 ? "1rem" : "0" }}>
      {items.map((item) => (
        <li key={item.id}>
          {item.id && (
            <Link
              href={`#${item.id}`}
              className={clsx(
                isActive(item)
                  ? "text-stone-900 font-medium dark:text-white"
                  : "text-stone-600 dark:text-stone-400 hover:text-highlight",
                "py-1 inline-block",
              )}
            >
              {item.value}
            </Link>
          )}
          {!!item.children?.length && (
            <TocList
              items={item.children}
              level={level + 1}
              currentId={currentId}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export function TableOfContents({
  className,
  items,
}: {
  items: Toc;
  className?: string;
}) {
  const [currentId, setCurrentId] = useState<string>("");

  const itemsUnderH1 = useMemo(() => items[0]?.children || [], [items]);

  const getHeadings = useCallback(() => {
    return itemsUnderH1
      .flatMap((node) => {
        const headings = [node];
        if (node.children) {
          headings.push(...node.children);
        }
        return headings;
      })
      .filter((item): item is TocEntry & { id: string } => Boolean(item.id))
      .map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return null;

        const style = window.getComputedStyle(el);
        const scrollMt = parseFloat(style.scrollMarginTop);

        const top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
        return { id: item.id, top };
      })
      .filter((x): x is { id: string; top: number } => x !== null);
  }, [itemsUnderH1]);

  useEffect(() => {
    if (itemsUnderH1.length === 0) return;

    const onScroll = () => {
      const headings = getHeadings();
      if (headings.length === 0) return;

      const top = window.scrollY;
      let current = headings[0]?.id;

      for (const heading of headings) {
        if (top >= heading.top - 500) {
          current = heading.id;
        } else {
          break;
        }
      }

      current && setCurrentId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [getHeadings, itemsUnderH1]);

  if (!itemsUnderH1.length) return null;

  return (
    <div className={className}>
      <p className="font-medium text-highlight mb-3">On this page</p>
      <TocList items={itemsUnderH1} level={0} currentId={currentId} />
    </div>
  );
}
