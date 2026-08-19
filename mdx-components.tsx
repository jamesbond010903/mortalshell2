import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2
        className="mt-12 font-heading text-2xl font-bold text-foreground sm:text-3xl"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mt-8 font-heading text-xl font-semibold text-foreground"
        {...props}
      />
    ),
    p: (props) => (
      <p className="mt-4 text-base leading-relaxed text-muted" {...props} />
    ),
    ul: (props) => (
      <ul
        className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="mt-4 list-decimal space-y-2 pl-5 text-base leading-relaxed text-muted"
        {...props}
      />
    ),
    strong: (props) => (
      <strong className="font-semibold text-foreground" {...props} />
    ),
    img: (props) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img className="mt-6 w-full rounded border border-border" loading="lazy" {...props} />
    ),
    a: ({ href = "", children, ...props }) => {
      if (href.startsWith("http")) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
            {...props}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className="text-primary hover:underline" {...props}>
          {children}
        </Link>
      );
    },
    ...components,
  };
}
