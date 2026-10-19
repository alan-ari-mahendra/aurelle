import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
      </main>
    </>
  );
}
