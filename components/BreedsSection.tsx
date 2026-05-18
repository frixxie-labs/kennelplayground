import { breeds } from "../content/site.ts";

export function BreedsSection() {
  return (
    <section class="bg-[#211814] py-20 text-white">
      <div class="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-2 lg:px-8">
        {breeds.map((breed) => <BreedCard key={breed.id} {...breed} />)}
      </div>
    </section>
  );
}

type BreedCardProps = {
  id: string;
  label: string;
  title: string;
  description: string;
};

function BreedCard({ id, label, title, description }: BreedCardProps) {
  return (
    <article
      id={id}
      class="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/10 md:p-8"
    >
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#d7b18c] [font-family:var(--font-accent)]">
        {label}
      </p>
      <h2 class="mt-3 text-3xl font-semibold tracking-[-0.03em] [font-family:var(--font-display)] md:text-4xl">
        {title}
      </h2>
      <p class="mt-5 text-lg leading-8 text-white/80">{description}</p>
    </article>
  );
}
