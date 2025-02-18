import { Hero } from "./components/Hero/Hero";
import { PartnersMarquee } from "./components/Partners/PartnersMarquee";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PartnersMarquee />
    </main>
  );
}
