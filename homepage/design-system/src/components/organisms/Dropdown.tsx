"use client";

import * as Headless from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import type React from "react";
import { Button } from "../atoms/Button";

export function Dropdown(props: Headless.MenuProps) {
  return <Headless.Menu {...props} />;
}

export function DropdownButton<T extends React.ElementType = typeof Button>({
  as = Button,
  ...props
}: { className?: string } & Omit<Headless.MenuButtonProps<T>, "className">) {
  return <Headless.MenuButton as={as} {...props} />;
}

export function DropdownMenu({
  anchor = "bottom",
  className,
  ...props
}: { className?: string } & Omit<Headless.MenuItemsProps, "as" | "className">) {
  return (
    <Headless.MenuItems
      {...props}
      transition
      anchor={anchor}
      className={clsx(
        className,
        // Anchor positioning
        "[--anchor-gap:theme(spacing.2)] [--anchor-padding:theme(spacing.1.5)]",
        // Base styles
        "isolate rounded-lg p-1.5",
        // Invisible border that is only visible in `forced-colors` mode for accessibility purposes
        "outline outline-1 outline-transparent focus:outline-none",
        // Handle scrolling when menu won't fit in viewport
        "overflow-y-auto",
        // Popover background
        "bg-white/75 backdrop-blur-xl dark:bg-stone-925",
        // Shadows
        "shadow-lg ring-1 ring-stone-950/10 dark:ring-inset dark:ring-white/10",
        // Define grid at the menu level if subgrid is supported
        "supports-[grid-template-columns:subgrid]:grid supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto]",
        // Transitions
        "transition data-[closed]:data-[leave]:opacity-0 data-[leave]:duration-100 data-[leave]:ease-in",
      )}
    />
  );
}

export function DropdownItem({
  className,
  ...props
}: { className?: string } & (
  | Omit<Headless.MenuItemProps<"button">, "as" | "className">
  | Omit<Headless.MenuItemProps<typeof Link>, "as" | "className">
)) {
  let classes = clsx(
    className,
    // Base styles
    "group rounded-md space-x-2 focus:outline-none px-2.5 py-1.5",
    // Text styles
    "text-left text-sm/6 dark:text-white forced-colors:text-[CanvasText]",
    // Focus
    "data-[focus]:bg-stone-100 dark:data-[focus]:bg-stone-900",
    // Disabled state
    "data-[disabled]:opacity-50",
    // Forced colors mode
    "forced-color-adjust-none forced-colors:data-[focus]:bg-[Highlight] forced-colors:data-[focus]:text-[HighlightText] forced-colors:[&>[data-slot=icon]]:data-[focus]:text-[HighlightText]",
    // Use subgrid when available but fallback to an explicit grid layout if not
    "col-span-full grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] items-center",
    // Icons
    "[&>[data-slot=icon]]:col-start-1 [&>[data-slot=icon]]:row-start-1 [&>[data-slot=icon]]:-ml-0.5 [&>[data-slot=icon]]:mr-2.5 [&>[data-slot=icon]]:size-5 sm:[&>[data-slot=icon]]:mr-2 [&>[data-slot=icon]]:sm:size-4",
    "[&>[data-slot=icon]]:text-stone-500 [&>[data-slot=icon]]:data-[focus]:text-white [&>[data-slot=icon]]: [&>[data-slot=icon]]:data-[focus]:dark:text-white",
    // Avatar
    "[&>[data-slot=avatar]]:mr-2.5 [&>[data-slot=avatar]]:size-6 sm:[&>[data-slot=avatar]]:mr-2 sm:[&>[data-slot=avatar]]:size-5",
  );

  return "href" in props ? (
    <Headless.MenuItem as={Link} {...props} className={classes} />
  ) : (
    <Headless.MenuItem
      as="button"
      type="button"
      {...props}
      className={classes}
    />
  );
}

export function DropdownHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(className, "col-span-5 px-3.5 pb-1 pt-2.5 sm:px-3")}
    />
  );
}

export function DropdownSection({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.MenuSectionProps,
  "as" | "className"
>) {
  return (
    <Headless.MenuSection
      {...props}
      className={clsx(
        className,
        // Define grid at the section level instead of the item level if subgrid is supported
        "col-span-full supports-[grid-template-columns:subgrid]:grid supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto]",
      )}
    />
  );
}

export function DropdownHeading({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.MenuHeadingProps,
  "as" | "className"
>) {
  return (
    <Headless.MenuHeading
      {...props}
      className={clsx(
        className,
        "col-span-full grid grid-cols-[1fr,auto] gap-x-12 px-3.5 pb-1 pt-2 text-sm/5 font-medium text-stone-500 sm:px-3 sm:text-xs/5",
      )}
    />
  );
}

export function DropdownDivider({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.MenuSeparatorProps,
  "as" | "className"
>) {
  return (
    <Headless.MenuSeparator
      {...props}
      className={clsx(
        className,
        "col-span-full mx-3.5 my-1 h-px border-0 bg-stone-950/5 sm:mx-3 dark:bg-white/10 forced-colors:bg-[CanvasText]",
      )}
    />
  );
}

export function DropdownLabel({
  className,
  ...props
}: { className?: string } & Omit<Headless.LabelProps, "as" | "className">) {
  return (
    <Headless.Label
      {...props}
      data-slot="label"
      className={clsx(className, "text-highlight col-start-2 row-start-1")}
      {...props}
    />
  );
}

export function DropdownDescription({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.DescriptionProps,
  "as" | "className"
>) {
  return (
    <Headless.Description
      data-slot="description"
      {...props}
      className={clsx(
        className,
        "col-span-2 col-start-2 row-start-2 text-sm/5 text-stone-500 group-data-[focus]:text-white sm:text-xs/5  forced-colors:group-data-[focus]:text-[HighlightText]",
      )}
    />
  );
}

export function DropdownShortcut({
  keys,
  className,
  ...props
}: { keys: string | string[]; className?: string } & Omit<
  Headless.DescriptionProps<"kbd">,
  "as" | "className"
>) {
  return (
    <Headless.Description
      as="kbd"
      {...props}
      className={clsx(
        className,
        "col-start-5 row-start-1 flex justify-self-end",
      )}
    >
      {(Array.isArray(keys) ? keys : keys.split("")).map((char, index) => (
        <kbd
          key={index}
          className={clsx([
            "min-w-[2ch] text-center font-sans capitalize text-stone-400 group-data-[focus]:text-white forced-colors:group-data-[focus]:text-[HighlightText]",
            // Make sure key names that are longer than one character (like "Tab") have extra space
            index > 0 && char.length > 1 && "pl-1",
          ])}
        >
          {char}
        </kbd>
      ))}
    </Headless.Description>
  );
}
