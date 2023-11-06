import { Divider } from "@/components/divider";
import ColloApp from "@/components/projects/collo";
import ProjectDescription from "@/components/projects/project-description";
import Image from "next/image";
import {
  SiFigma,
  SiNextdotjs,
  SiChakraui,
  SiNestjs,
  SiTwilio,
} from "react-icons/si";

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
          "Leveraging cutting-edge technologies, we used next.js in a Service-oriented architecture with authentication using NextAuth, a seperate emailing service and a core functionality service in Nest.js along real time video chat using Twilio SDK.",
        ]}
        stack={[
          <SiFigma key="1"></SiFigma>,
          <SiNestjs key="4"></SiNestjs>,
          <SiNextdotjs key="2"></SiNextdotjs>,
          <SiChakraui key="3"></SiChakraui>,
          <SiTwilio key="5"></SiTwilio>,
        ]}
        link="https://www.collo.app"
        github="https://github.com/colloHQ/collo-app"
      />
      <Divider />
      <div className="w-full flex flex-col items-center">
        <div className="rounded-xl overflow-hidden flex justify-center items-center">
          <Image
            src="/collo2.png"
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
