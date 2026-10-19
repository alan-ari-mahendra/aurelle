import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Treatments from "@/components/sections/Treatments";
import Doctor from "@/components/sections/Doctor";
import Reasons from "@/components/sections/Reasons";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import Booking from "@/components/sections/Booking";
import Footer from "@/components/sections/Footer";

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
        <Results />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
