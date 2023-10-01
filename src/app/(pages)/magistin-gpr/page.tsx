import { Divider } from "@/components/divider";
import GPR from "@/components/projects/gpr";
import ProjectDescription from "@/components/projects/project-description";
import Image from "next/image";

export default function ProjectGPR() {
  return (
    <div>
      <ProjectDescription
        title="Magistin: Gestion Parc Roulant (GPR)"
        subtitle="Vehicles, Inventory & Human ressources Management for Entreprises. "
        role="Front-end Engineer"
        client="Xtensus"
        duration="60 days"
        summary={[
          "In this project, I undertook the redesign of an existing app, known as BookByQR, with a primary focus on enhancing its user interface and overall user experience.",
          "The initial phase involved a thorough cleanup of the outdated UI, followed by the creation of a fresh design system that seamlessly incorporated the app's branding elements. ",
          "Leveraging cutting-edge technologies, I developed the app using Next.js and Chakra UI, ensuring a modern and efficient user interface. ",
        ]}
      />
      <Divider />
      <div className="w-full flex flex-col items-center">
        <div className="rounded-xl overflow-hidden flex justify-center items-center">
          <Image
            src="/gpr2.svg"
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
