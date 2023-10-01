import Image from "next/image";
import { Divider } from "@/components/divider";

export default function GPR() {
  return (
    <>
      <div className="flex flex-col w-full pb-20 gap-5">
        <h1 className="font-heading text-[white] text-xl lg:text-3xl ">
          Microservices
        </h1>
        <h1 className="font-par text-text 3xl:text-[20px] md:text-[16px] max-w-5xl leading-7 lg:leading-10 font-light">
          <span>SPOF </span>{" "}
          <span className="opacity-70 font-extralight text-sm lg:text-[16px]">
            {" (Single Point Of Failure)"}
          </span>
          <br />
          <span>
            Observablility
            <span className="opacity-70 font-extralight text-sm lg:text-[16px]">
              {" (Jhipster registry & gateway offer monitoring)"}
            </span>
          </span>
          <br />
          <span>Easier to update</span>
          <br />
          ...
        </h1>
      </div>
      <div className="w-full rounded-2xl flex flex-col gap-20 justify-center items-center">
        <Image
          src="/gpr/micro-arch.svg"
          width={2000}
          height={200}
          alt="Microservices Architecture. Spring Boot. Angular 16. Spring Cloud. Jhipster Gateway. Netflix Eureka Service Discovery. Jhipster Registry. Keycloack Oauth"
          className="rounded-md lg:rounded-lg"
        />
      </div>
      <Divider />
      <div className="flex flex-col w-full pb-20 gap-5">
        <h1 className="font-heading text-[white] text-xl lg:text-3xl ">
          Fresh New Design
        </h1>
        <h1 className="font-par text-text 3xl:text-[20px] text-[16px] max-w-5xl leading-7 lg:leading-10 font-light">
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
          className="rounded-md lg:rounded-lg"
        />
      </div>
      <Divider />
      <div className="w-full main-card p-4 lg:p-20 rounded-md lg:rounded-2xl flex flex-col gap-4 lg:gap-20 justify-center items-center">
        {["list.svg", "view.svg", "L-2.jpeg"].map((image) => (
          <Image
            src={`/gpr/${image}`}
            key={image}
            width={2000}
            height={200}
            alt="Vehicles, Inventory & Human ressources Management for Entreprises."
            className="rounded-sm lg:rounded-lg"
          />
        ))}
      </div>
    </>
  );
}
