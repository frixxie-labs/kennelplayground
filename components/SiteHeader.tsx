import { navigation, site } from "../content/site.ts";

export function SiteHeader() {
  return (
    <header class="bg-white">
      <div class="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-4 md:flex-row md:items-center md:justify-between lg:px-8">
        <a
          href="#om"
          class="flex items-center gap-5 text-lg font-semibold tracking-[-0.02em]"
        >
          <img
            src={site.logo}
            width="128"
            height="128"
            alt="Kennel Playground logo"
            class="h-20 w-20 object-cover md:h-32 md:w-32"
          />
          <span>{site.name}</span>
        </a>
        <nav
          aria-label="Hovedmeny"
          class="flex flex-wrap gap-x-6 gap-y-3 text-base font-semibold"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              class="text-[#171717] transition hover:text-[#9a1015] focus:outline-none focus:ring-2 focus:ring-[#9a1015] focus:ring-offset-4"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
