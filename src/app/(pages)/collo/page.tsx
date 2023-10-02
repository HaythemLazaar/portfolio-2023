import { Divider } from "@/components/divider";
import ProjectDescription from "@/components/projects/project-description";
import Image from "next/image";

export default function ProjectCollo() {
  return (
    <div>
      <ProjectDescription
        title="Collo: Where teams work at maximum productivity"
        subtitle="Project Management, Communication & Collaboration Platform."
        role="Product Designer & Software Engineer"
        client="Esprit"
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
            src="/collo2.svg"
            width={2000}
            height={200}
            alt="Project Management App"
            className="mt-42"
          />{" "}
        </div>
        <Divider />
      </div>
    </div>
  );
}
