import ProjectCard from "../project-card";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex flex-col gap-48 z-20 py-32">
      <ProjectCard
        name="BookByQR"
        link="https://bookbyqr-redesign.vercel.app/bookings"
        tags={["web app", "redesign"]}
        imageSrc="/bookbyqr2.svg"
        imageAlt="Scheduling App"
        description="Online & In-Person Appointment Scheduling App."
        period="Freelance, '23"
      />
      <ProjectCard
        name="Magistin: GPR"
        tags={["web app", "redesign"]}
        imageSrc="/gpr1.svg"
        imageAlt="Inventory Management App"
        description="Vehicles, Inventory  & Human ressources Management for Public & Private Corporate Entreprises."
        period="Xtensus, '23"
      />

      <ProjectCard
        name="Collo"
        tags={["web app", "personal Project"]}
        link="https://www.collo.app"
        imageSrc="/collo1.svg"
        imageAlt="Project Management App"
        description="Project Management, Communication & Collaboration Platform. Allowing remote teams to work at maximum productivity."
        period="Esprit, '23"
      />
    </div>
  );
}
