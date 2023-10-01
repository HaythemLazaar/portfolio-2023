import Hero from "@/components/Hero";
import About from "@/components/about";
import ContactCard from "@/components/contact/contact-card";
import Navbar from "@/components/nav/home-navbar";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <GrainyBg />
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

const GrainyBg = () => {
  return (
    <div className="absolute top-48 md:top-0 z-0 md:h-auto md:w-auto flex items-center justify-center">
      <Image
        src="/Ellipse.svg"
        width={1600}
        height={500}
        alt="ellipse"
        className="block absolute left-[-40px] blur-2xl lg:left-[-100px] top-0 md:top-64 lg:top-32 3xl:top-44 lg:blur-3xl"
      />
      <Image
        src="/Ellipse.svg"
        width={1600}
        height={500}
        alt="ellipse"
        className="block lg:hidden absolute left-0 blur-2xl lg:left-[-100px] top-12 md:top-64 lg:top-32 3xl:top-44 lg:blur-3xl"
      />
      <Image
        src="/noise.svg"
        width={3600}
        height={500}
        alt="noise"
        className="relative"
      />
    </div>
  );
};
