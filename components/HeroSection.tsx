import { site, values } from "../content/site.ts";

export function HeroSection() {
  return (
    <section
      id="om"
      class="bg-[#f3eadc] px-5 py-12 text-[#211814] md:py-20 lg:px-8"
    >
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div class="space-y-6 text-xl leading-9 text-[#4f4038] md:text-2xl md:leading-10">
            <p class="text-2xl leading-10 text-[#211814] md:text-3xl md:leading-[1.45]">
              <strong>Kennel Playground</strong>{" "}
              er et lite, hjemmebasert oppdrett hvor hundene våre først og
              fremst er familie. Navnet gjenspeiler vår filosofi - at livet
              sammen med hund skal være et rom for lek, læring og lojalitet.
            </p>
            <p>
              Vi legger stor vekt på trygghet, tilstedeværelse og et nært
              samspill i hverdagen. Hos oss får hver hund vokse i sitt eget
              tempo, med respekt for både individet og flokken.
            </p>
            <p>
              Alle våre pudler lever tett på oss, med klare rammer, varme
              relasjoner og dype røtter i både naturen og stillheten. Når vi har
              valpekull, fokuserer vi på ro, harmoni og innlæring av enkle,
              viktige kommandoer som <em>kom</em>, <em>bli</em> og <em>bra</em>.
            </p>
            <p>
              Vi har som mål at hver valp skal ha begrep om disse når den reiser
              herfra - og vi får stadig tilbakemeldinger om at vi lykkes med
              akkurat det.
            </p>
          </div>

          <div class="mt-10 grid gap-3 sm:grid-cols-3">
            {values.map((value) => (
              <p
                key={value}
                class="border-l border-[#9a1015]/30 pl-4 text-sm leading-6 text-[#6f5b50]"
              >
                {value}
              </p>
            ))}
          </div>
        </div>

        <div class="relative">
          <div class="absolute -inset-4 rounded-[2rem] bg-[#211814]" />
          <img
            src={site.heroImage}
            width="778"
            height="1024"
            alt="Sort puddel fra Kennel Playground"
            class="relative aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-2xl shadow-[#211814]/20"
          />
        </div>
      </div>
    </section>
  );
}
