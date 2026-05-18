import { links, site } from "../content/site.ts";

export function SiteFooter() {
  return (
    <footer class="border-t border-black/10 px-5 py-8 text-center text-sm text-[#6b5a51]">
      <p>
        {site.name}. Se også NKKs
        <a
          href={links.breedStandard}
          class="ml-1 font-medium underline-offset-4 hover:underline"
        >
          rasestandarder
        </a>.
      </p>
    </footer>
  );
}
