import Hero from "@/components/Hero";
import About from "@/components/about";
import ContactCard from "@/components/contact/contact-card";
import Navbar from "@/components/nav/home-navbar";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute z-0 h-[100vh] w-[200vw] md:h-auto md:w-auto flex items-center justify-center">
        <Image
          src="/Ellipse.svg"
          width={1600}
          height={500}
          alt="ellipse"
          className="absolute left-[-100px] top-64 lg:top-32 3xl:top-44 blur-3xl"
        />
        <Image
          src="/noise.svg"
          width={3600}
          height={500}
          alt="noise"
          className="relative"
        />
      </div>
      <Navbar />
      <main className="flex min-h-screen flex-col px-7 sm:px-10 md:px-20 lg:px-36 bg-background">
        <Hero />
        <Projects />
        <About />
        <ContactCard />
      </main>
    </>
  );
}
