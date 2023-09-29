import { Divider } from "@/components/divider";
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
      <div className="flex flex-col w-full pb-20 gap-5">
        <h1 className="font-heading text-[white] text-3xl ">Microservices</h1>
        <h1 className="font-par text-text 3xl:text-[20px] md:text-[16px] max-w-5xl leading-10 font-light">
          <span>SPOF </span>{" "}
          <span className="opacity-70 font-extralight text-[16px]">
            {" (Single Point Of Failure)"}
          </span>
          <br />
          <span>
            Observablility
            <span className="opacity-70 font-extralight text-[16px]">
              {" (Jhipster registry & gateway offer monitoring)"}
            </span>
          </span>
          <br />
          <span>Easier to update</span>
          <br />
          ...
        </h1>
      </div>

      <div className="w-full main-card py-20 px-48 rounded-2xl flex flex-col gap-20 justify-center items-center">
        <Image
          src="/gpr/micro-arch.svg"
          width={2000}
          height={200}
          alt="Microservices Architecture. Spring Boot. Angular 16. Spring Cloud. Jhipster Gateway. Netflix Eureka Service Discovery. Jhipster Registry. Keycloack Oauth"
          className="rounded-lg"
        />
      </div>
      <Divider />
      <div className="flex flex-col w-full pb-20 gap-5">
        <h1 className="font-heading text-[white] text-3xl ">
          Fresh New Design
        </h1>
        <h1 className="font-par text-text 3xl:text-[20px] md:text-[16px] max-w-5xl leading-10 font-light">
          This project not only revitalized the app&apos;s aesthetics but also
          improved its functionality, ultimately delivering a more user-friendly
          and visually appealing management platform.
        </h1>
      </div>
      <div className="w-full rounded-2xl flex flex-col gap-20 justify-center items-center">
        <Image
          src="/gpr/gpr-sys.svg"
          width={2000}
          height={200}
          alt="Vehicles, Inventory & Human ressources Management for Entreprises."
          className="rounded-lg"
        />
      </div>
      <Divider />
      <div className="w-full main-card p-20 rounded-2xl flex flex-col gap-20 justify-center items-center">
        {["list.svg", "view.svg", "L-2.jpeg"].map((image) => (
          <Image
            src={`/gpr/${image}`}
            key={image}
            width={2000}
            height={200}
            alt="Vehicles, Inventory & Human ressources Management for Entreprises."
            className="rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
