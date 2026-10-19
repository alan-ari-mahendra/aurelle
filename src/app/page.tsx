import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Treatments from "@/components/sections/Treatments";
import Doctor from "@/components/sections/Doctor";
import Reasons from "@/components/sections/Reasons";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Treatments />
        <Doctor />
        <Reasons />
      </main>
    </>
  );
}
