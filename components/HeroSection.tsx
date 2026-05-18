import { site } from "../content/site.ts";

export function HeroSection() {
  return (
    <section
      id="om"
      class="bg-[#b7caaa] px-5 pb-20 pt-8 text-[#171717] md:pb-32 md:pt-12 lg:px-8"
    >
      <div class="mx-auto max-w-3xl">
        <div class="space-y-6 text-lg leading-8">
          <p>
            <strong>Kennel Playground</strong>{" "}
            er et lite, hjemmebasert oppdrett hvor hundene våre først og fremst
            er familie. Navnet gjenspeiler vår filosofi - at livet sammen med
            hund skal være et rom for lek, læring og lojalitet.
          </p>
          <p>
            Vi legger stor vekt på trygghet, tilstedeværelse og et nært samspill
            i hverdagen. Hos oss får hver hund vokse i sitt eget tempo, med
            respekt for både individet og flokken.
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

        <div class="mt-6 bg-black">
          <img
            src={site.heroImage}
            width="980"
            height="980"
            alt="Sort puddel fra Kennel Playground"
            class="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
