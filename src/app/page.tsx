import Hero from "@/components/Hero";
import About from "@/components/about";
import Contact from "@/components/contact";
import Navbar from "@/components/nav/home-navbar";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute z-0">
        <Image
          src="/Ellipse.svg"
          width={1600}
          height={500}
          alt="ellipse"
          className="absolute lg:top-32 3xl:top-40 blur-3xl"
        />
        <Image
          src="/noise.svg"
          width={3600}
          height={500}
          alt="ellipse"
          className="relative"
        />
      </div>
      <Navbar />
      <main className="flex min-h-screen flex-col px-36 bg-background">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}
