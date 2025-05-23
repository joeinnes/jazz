import { PackageDocs } from "@/components/docs/packageDocs";
import { packages } from "@/content/packages";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ package: string }>;
}

export default async function Page({ params }: Props) {
  const packageName = (await params).package;
  if (!packages.map((p) => p.name).includes(packageName)) {
    return notFound();
  }

  return <PackageDocs package={packageName} />;
}

export async function generateMetadata({ params }: Props) {
  const packageName = (await params).package;
  return {
    title: `${packageName} - jazz`,
    description: `API reference for ${packageName}.`,
  };
}

export async function generateStaticParams() {
  // TODO: ideally we check which files exist in ../../typedoc
  return packages.map((pkg) => ({ package: pkg.name }));
}
