import { Divider } from "@/components/divider";
import GPR from "@/components/projects/gpr";
import ProjectDescription from "@/components/projects/project-description";
import Image from "next/image";
import { SiFigma, SiAngular, SiSass, SiSpring } from "react-icons/si";

export default function ProjectGPR() {
  return (
    <div>
      <ProjectDescription
        title="Magistin: Gestion Parc Roulant (GPR)"
        subtitle="Vehicles, Inventory & Human ressources Management for Entreprises. "
        role="Front-end Engineer"
        client="Xtensus"
        duration="Jul - Sep, '23"
        summary={[
          "In this project, I undertook the redesign of an existing app, known as Magistin: GPR, with a primary focus on enhancing its user interface and some backend services.",
          "The initial phase involved a cleanup of the old codebase & the UI design, followed by the creation of a fresh design system.",
        ]}
        stack={[
          <SiFigma key="1"></SiFigma>,
          <SiSpring key="4"></SiSpring>,
          <SiAngular key="2"></SiAngular>,
          <SiSass key="3"></SiSass>,
        ]}
      />
      <Divider />
      <div className="w-full flex flex-col items-center">
        <div className="rounded-xl overflow-hidden flex justify-center items-center">
          <Image
            src="/gpr2.png"
            width={2000}
            height={200}
            alt="Vehicles, Inventory & Human ressources Management for Entreprises."
            className="mt-42"
          />{" "}
        </div>
        <Divider />
      </div>
      <GPR />
    </div>
  );
}
