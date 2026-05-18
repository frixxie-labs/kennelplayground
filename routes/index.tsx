import { Head } from "fresh/runtime";
import { BreedsSection } from "../components/BreedsSection.tsx";
import { ContactSection } from "../components/ContactSection.tsx";
import { GallerySection } from "../components/GallerySection.tsx";
import { HeroSection } from "../components/HeroSection.tsx";
import { PuppiesSection } from "../components/PuppiesSection.tsx";
import { SiteFooter } from "../components/SiteFooter.tsx";
import { SiteHeader } from "../components/SiteHeader.tsx";
import { site } from "../content/site.ts";
import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <main class="min-h-screen bg-[#f3eadc] text-[#211814]">
      <Head>
        <title>Kennel Playground | Hjemmebasert puddeloppdrett</title>
        <meta name="description" content={site.description} />
      </Head>

      <SiteHeader />
      <HeroSection />
      <BreedsSection />
      <PuppiesSection />
      <GallerySection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
});
