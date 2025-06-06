import { Icon } from "@garden-co/design-system/src/components/atoms/Icon";
import Link from "next/link";
import { ReactNode } from "react";
import { createHighlighter } from "shiki";
import { jazzDark } from "../../themes/jazzDark.mjs";
import { jazzLight } from "../../themes/jazzLight.mjs";

const highlighterPromise = createHighlighter({
  langs: ["typescript", "bash", "tsx", "json", "ruby", "groovy", "svelte", "vue"],
  themes: [jazzLight as any, jazzDark as any],
});

export function Example({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1" data-pagefind-weight="2">
      <div className="border bg-white dark:bg-stone-900 rounded shadow-sm">
        <div className="py-1 px-2  border-b text-xs">Example</div>
        <div className="py-1 px-2 overflow-x-auto">{children}</div>
      </div>
    </div>
  );
}

export async function Highlight({
  children,
  hide,
  lang = "typescript",
  className = "",
}: {
  children: string;
  hide?: number[];
  lang?: string;
  className?: string;
}) {
  const html = (await highlighterPromise).codeToHtml(children, {
    lang,
    structure: "inline",
    themes: {
      light: "jazz-light",
      dark: "jazz-dark",
    },
  });

  return (
    <code className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export function ClassOrInterface({
  inPackage,
  name,
  typeParameters,
  children,
  doc,
  isInterface,
}: {
  inPackage: string;
  name: string;
  typeParameters?: string;
  children: ReactNode;
  doc: ReactNode;
  isInterface?: boolean;
}) {
  return (
    <div className="relative not-prose">
      <div
        id={name}
        className="peer sticky top-0 mt-4 md:top-[61px] md:pt-8 bg-white dark:bg-stone-950 z-20"
      >
        <Link
          href={"#" + name}
          className="inline-flex items-center gap-2 lg:-ml-[22px]"
        >
          <Icon name="link" size="xs" className="hidden lg:inline" />
          <h3 className="text-lg lg:text-xl">
            <Highlight>
              {(isInterface ? "interface " : "class ") + name + typeParameters}
            </Highlight>
          </h3>
        </Link>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        {doc && <div>{doc}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
}

export function ClassRef({ name }: { name: string }) {
  return <Highlight hide={[0]}>{`class\n${name}`}</Highlight>;
}

export function PropRef({ on, prop }: { on?: string; prop: string }) {
  return on ? (
    <Highlight>{`${on}.${prop}`}</Highlight>
  ) : (
    <Highlight>{prop}</Highlight>
  );
}

export function PropDecl({
  name,
  type,
  doc,
  example,
}: {
  name?: string;
  type?: string;
  doc: ReactNode;
  example?: ReactNode;
}) {
  return (
    <div
      className="text-sm flex flex-col gap-3 my-2 p-3 rounded bg-stone-50 dark:bg-stone-925"
      data-pagefind-weight="4"
    >
      {(name || type) && (
        <div>
          {name && <Highlight>{name + ":"}</Highlight>}
          {"  "}
          {type && (
            <span className="opacity-75 text-xs pl-1">
              <Highlight
                hide={[0, 1, 2 + type.split("\n").length]}
              >{`class X {\nprop:\n${type}`}</Highlight>
            </span>
          )}
        </div>
      )}
      <div className="flex flex-col lg:flex-row gap-4">
        <DocComment>{doc || "⚠️ undocumented"}</DocComment>
        {example && <Example>{example}</Example>}
      </div>
    </div>
  );
}

export function FnDecl({
  signature,
  typeParams,
  paramTypes,
  returnType,
  doc,
  example,
}: {
  signature: string;
  typeParams: string[];
  paramTypes: string[];
  returnType: string;
  doc: ReactNode;
  example: ReactNode;
}) {
  // Extract the method name from the signature (everything before the first parenthesis or type parameter)
  const methodName = signature.match(/^[^(<]+/)?.[0];

  return (
    <div
      id={methodName}
      className="text-sm flex flex-col gap-3 my-2 p-3 rounded bg-stone-50 dark:bg-stone-925"
      data-pagefind-weight="5"
    >
      <div className="flex flex-col gap-2">
        <div>
          {<Highlight>{signature + ":"}</Highlight>}{" "}
          <Highlight>{returnType}</Highlight>
        </div>
        <div className="pl-4 text-xs flex flex-col gap-2">
          {typeParams.length > 0 && (
            <div>
              <Highlight
                hide={[0, 1 + typeParams.length]}
              >{`class Thing<\n${typeParams.join(",\n")}\n]> {}`}</Highlight>
            </div>
          )}
          {paramTypes.length > 0 && (
            <div>
              <Highlight
                hide={[0, 1 + paramTypes.length]}
              >{`function fn(...args: [\n${paramTypes.join(
                ",\n",
              )}\n]) {}`}</Highlight>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <DocComment>{doc || "⚠️ undocumented"}</DocComment>
        {example && <Example>{example}</Example>}
      </div>
    </div>
  );
}

export function PropCategory({
  name,
  description,
  example,
}: {
  name: string;
  description?: ReactNode;
  example?: ReactNode;
}) {
  return (
    <>
      <div
        className="col-span-6 py-3 font-display font-semibold text-lg text-highlight"
        data-pagefind-weight="3"
      >
        {name}
      </div>
      {description && <PropDecl doc={description} example={example} />}
    </>
  );
}

export function DocComment({ children }: { children: ReactNode }) {
  return (
    <div
      className="prose-inner-sm flex-1 max-w-2xl leading-snug"
      data-pagefind-weight="2"
    >
      {children}
    </div>
  );
}
