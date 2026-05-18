import { galleryImages } from "../content/site.ts";
import { SectionHeading } from "./SectionHeading.tsx";

export function GallerySection() {
  return (
    <section id="galleri" class="bg-[#efe2d1] py-16">
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <div class="max-w-3xl">
          <SectionHeading eyebrow="Galleri" title="Playground Noir.">
            <p>
              Sorte hunder krever lys, skygge og presisjon. Playground Noir er
              Kennel Playgrounds visuelle stil, skapt for å fange glans, uttrykk
              og personlighet i de mørke tonene.
            </p>
          </SectionHeading>
        </div>
        <div class="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((src, index) => (
            <img
              key={src}
              src={src}
              width="768"
              height="1024"
              alt={`Playground Noir puddelportrett ${index + 1}`}
              loading="lazy"
              class="mb-5 w-full break-inside-avoid rounded-[1.75rem] bg-[#201714] object-cover shadow-lg shadow-black/10"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
