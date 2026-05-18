import { contact } from "../content/site.ts";
import { SectionHeading } from "./SectionHeading.tsx";

export function ContactSection() {
  return (
    <section id="kontakt" class="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div class="grid gap-8 rounded-[2rem] bg-[#211814] p-6 text-white md:grid-cols-[0.95fr_1.05fr] md:p-10">
        <SectionHeading
          eyebrow="Kontakt"
          title="Vil du vite mer om flokken?"
          tone="dark"
        >
          <p>
            Ta kontakt for en prat om Kennel Playground, pudlene våre eller
            planlagte kull.
          </p>
        </SectionHeading>
        <address class="not-italic text-lg leading-9 text-white/85">
          <strong class="block text-white">{contact.name}</strong>
          <span class="block">{contact.address}</span>
          <a
            class="block underline-offset-4 hover:underline"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <a
            class="block underline-offset-4 hover:underline"
            href={`tel:${contact.phoneHref}`}
          >
            {contact.phoneDisplay}
          </a>
          <a
            class="block underline-offset-4 hover:underline"
            href={contact.facebook}
          >
            Facebook: Kennel Playground
          </a>
          <a
            class="block underline-offset-4 hover:underline"
            href={contact.instagram}
          >
            Instagram: @poodleplayground
          </a>
          <span class="block">TikTok: {contact.tiktok}</span>
        </address>
      </div>
    </section>
  );
}
