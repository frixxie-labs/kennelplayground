import { SectionHeading } from "./SectionHeading.tsx";

export function PuppiesSection() {
  return (
    <section id="valper" class="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div class="rounded-[2rem] bg-[#fffaf2] p-6 shadow-sm ring-1 ring-[#211814]/10 md:p-10">
        <div class="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Valper"
            title="C-kullet, født 15. mai 2025."
          />
          <div class="space-y-5 text-lg leading-8 text-[#5f4d43]">
            <p>
              Et spesielt kull ble født under Ellies rolige, våkne blikk: syv
              sorte storpuddelvalper, hver med sin egen kraft og rytme.
              Fødselsforløpet var fint og ukomplisert.
            </p>
            <p>
              Valpene vokser opp midt i stua, omgitt av mennesker, hunder og
              hverdagslyder. De lærer rytme, trygghet og samspill gjennom
              tilstedeværende rammer, ikke krav. Ett navn er spesielt:
              Playground's Celebrate Cicki, en hyllest til en delt bursdag.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
