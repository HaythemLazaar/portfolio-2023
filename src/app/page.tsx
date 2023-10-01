import Hero from "@/components/Hero";
import About from "@/components/about";
import ContactCard from "@/components/contact/contact-card";
import { GrainyBg } from "@/components/grainy-bg";
import Navbar from "@/components/nav/home-navbar";
import Projects from "@/components/projects";

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
