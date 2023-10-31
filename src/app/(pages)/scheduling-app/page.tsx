import { Divider } from "@/components/divider";
import ProjectDescription from "@/components/projects/project-description";
import SchedulingApp from "@/components/projects/scheduling-app";
import Image from "next/image";

export default function ProjectSchedulingPage() {
  return (
    <div>
      <ProjectDescription
        title="BookByQR"
        subtitle="Appointment Scheduling App"
        role="Freelance Designer & Front-end Dev"
        client="Client from Upwork"
        duration="45 Days"
        summary={[
          "In this project, I undertook the redesign of an existing app, known as BookByQR, with a primary focus on enhancing its user interface and overall user experience.",
          "The initial phase involved a thorough cleanup of the outdated UI, followed by the creation of a fresh design system that seamlessly incorporated the app's branding elements. ",
          "Leveraging cutting-edge technologies, I developed the app using Next.js and Chakra UI, ensuring a modern and efficient user interface. ",
        ]}
        link="https://bookbyqr-redesign.vercel.app/bookings"
      />
      <Divider />

      <div className="w-full flex flex-col items-center">
        <div className="lg:rounded-xl overflow-hidden flex justify-center items-center">
          <Image
            src="/bookbyqr2.png"
            width={2000}
            height={200}
            alt="appointment scheduling app landing page"
            className="mt-42"
          />{" "}
        </div>
        <Divider />
        <SchedulingApp />
      </div>
    </div>
  );
}
