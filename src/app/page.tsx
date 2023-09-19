import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute top-48 z-0">
        <Image
          src="/Ellipse.svg"
          width={1400}
          height={500}
          alt="ellipse"
          className="absolute blur-3xl"
        />
        <Image
          src="/noise.svg"
          width={1600}
          height={500}
          alt="ellipse"
          className="relative"
        />
      </div>
      <Navbar />
      <main className="flex min-h-screen flex-col px-36 bg-background py-20 ">
        <Hero />
        <Projects />
      </main>
    </>
  );
}
