import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collections from "@/components/Collections";
import Signature from "@/components/Signature";
import Identity from "@/components/Identity";
import Collaborations from "@/components/Collaborations";
import Lookbook from "@/components/Lookbook";
import News from "@/components/News";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Collections />
        <Signature />
        <Identity />
        <Collaborations />
        <Lookbook />
        <News />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

