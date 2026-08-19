import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { shells } from "@/lib/data";
import { ArticleHeader } from "@/components/ArticleHeader";
import { ProseBody } from "@/components/ProseBody";
import { RelatedSidebar } from "@/components/RelatedSidebar";
import { FaqAccordion } from "@/components/FaqAccordion";

export function generateStaticParams() {
  return shells.map((shell) => ({ slug: shell.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const shell = shells.find((s) => s.slug === slug);
  if (!shell) return {};
  return {
    title: `${shell.name} — Mortal Shell II Shell Guide`,
    description: shell.description,
    alternates: { canonical: `/shells/${shell.slug}` },
  };
}

export default async function ShellDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const shell = shells.find((s) => s.slug === slug);
  if (!shell) notFound();

  return (
    <>
      <ArticleHeader shell={shell} />
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[1fr_280px]">
        <ProseBody shell={shell} />
        <RelatedSidebar />
      </div>
      <FaqAccordion
        items={[
          {
            question: `How do I unlock ${shell.name}?`,
            answer:
              shell.howToUnlock ??
              "Unlock steps are still being confirmed post-launch.",
          },
          {
            question: `What is ${shell.name}'s best build?`,
            answer: shell.start,
          },
          {
            question: `Is ${shell.name} good for new players?`,
            answer: `${shell.description} ${shell.watch}`,
          },
        ]}
      />
    </>
  );
}
