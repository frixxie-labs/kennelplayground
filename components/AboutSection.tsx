import { values } from "../content/site.ts";
import { SectionHeading } from "./SectionHeading.tsx";

export function AboutSection() {
  return (
    <section id="om" class="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div class="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <SectionHeading
          eyebrow="Om kennelen"
          title="Lek, læring og lojalitet."
        />
        <div class="space-y-5 text-lg leading-8 text-[#5f4d43]">
          <p>
            Navnet gjenspeiler filosofien vår: livet sammen med hund skal være
            et rom for lek, læring og lojalitet. Vi legger stor vekt på
            trygghet, tilstedeværelse og et nært samspill i hverdagen.
          </p>
          <p>
            Alle pudlene lever tett på oss, med klare rammer, varme relasjoner
            og dype røtter i både naturen og stillheten. Når vi har valpekull,
            fokuserer vi på ro, harmoni og innlæring av enkle, viktige
            kommandoer som kom, bli og bra.
          </p>
        </div>
      </div>
      <div class="mt-10 grid gap-4 md:grid-cols-3">
        {values.map((value) => (
          <article
            key={value}
            class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
          >
            <p class="text-lg font-medium leading-7">{value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
