import type { ComponentChildren } from "preact";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  tone?: "light" | "dark";
  children?: ComponentChildren;
};

export function SectionHeading(
  { eyebrow, title, tone = "light", children }: SectionHeadingProps,
) {
  const eyebrowClass = tone === "dark" ? "text-[#d7b18c]" : "text-[#a36f45]";
  const bodyClass = tone === "dark" ? "text-white/70" : "text-[#5f4d43]";

  return (
    <div>
      <p
        class={`text-sm font-semibold uppercase tracking-[0.2em] [font-family:var(--font-accent)] ${eyebrowClass}`}
      >
        {eyebrow}
      </p>
      <h2 class="mt-3 text-4xl font-semibold tracking-[-0.03em] [font-family:var(--font-display)] md:text-5xl">
        {title}
      </h2>
      {children && (
        <div class={`mt-5 text-lg leading-8 ${bodyClass}`}>{children}</div>
      )}
    </div>
  );
}
