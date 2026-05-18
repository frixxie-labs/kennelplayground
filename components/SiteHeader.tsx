import { navigation, site } from "../content/site.ts";

export function SiteHeader() {
  return (
    <header class="border-b border-[#211814]/10 bg-[#fffaf2]">
      <div class="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-4 md:flex-row md:items-center md:justify-between lg:px-8">
        <a
          href="#om"
          class="flex items-center gap-4 text-lg font-semibold tracking-[-0.02em]"
        >
          <img
            src={site.logo}
            width="128"
            height="128"
            alt="Kennel Playground logo"
            class="h-16 w-16 object-cover md:h-24 md:w-24"
          />
          <span>{site.name}</span>
        </a>
        <nav
          aria-label="Hovedmeny"
          class="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold uppercase tracking-[0.08em] [font-family:var(--font-accent)]"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              class="text-[#211814] transition hover:text-[#9a1015] focus:outline-none focus:ring-2 focus:ring-[#9a1015] focus:ring-offset-4"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
