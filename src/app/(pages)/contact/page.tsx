import Contact from "@/components/contact";
import Socials from "@/components/contact/socials";
import { GrainyBg } from "@/components/grainy-bg";

export default function ContactPage() {
  return (
    <div className="relative">
      <GrainyBg />
      <Contact style="max-w-[1200px]" />
      <Socials />
    </div>
  );
}
