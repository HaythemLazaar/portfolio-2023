import { Divider } from "@/components/divider";
import ColloApp from "@/components/projects/collo";
import ProjectDescription from "@/components/projects/project-description";
import Image from "next/image";

export default function ProjectCollo() {
  return (
    <div>
      <ProjectDescription
        title="Collo"
        subtitle="Project Management, Communication & Collaboration Platform."
        role="Product Designer & Software Engineer"
        client="Esprit"
        duration="Feb - May, '23"
        summary={[
          "This is a project that I've been working on with my team as a requirement for the school. I had an orchestration role where I have been involved in designing the UI, designing the software and coming up with solutions that meet our business goals. ",
          "The initial phase involved a thorough cleanup of the outdated UI, followed by the creation of a fresh design system that seamlessly incorporated the app's branding elements. ",
          "Leveraging cutting-edge technologies, we used next.js in a Service-oriented architecture with authentication using NextAuth, a seperate emailing service and a core functionality service in Nest.js along real time video chat using Twilio SDK.",
        ]}
        link="https://www.collo.app"
        github="https://github.com/colloHQ/collo-app"
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
      <ColloApp />
    </div>
  );
}
