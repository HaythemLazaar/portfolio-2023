import Image from "next/image";
import { Divider } from "@/components/divider";

export default function ColloApp() {
  return (
    <>
      <div className="flex flex-col w-full pb-20 gap-5">
        <h1 className="font-heading text-[white] text-xl lg:text-3xl ">
          Features Packed
        </h1>
        <h1 className="font-par text-text 3xl:text-[20px] md:text-[16px] max-w-5xl leading-7 lg:leading-10 font-light">
          What you would expect from the title{" "}
          {`"Allowing teams to work at maximum productivity" `}meaning that you
          won&apos;t have to switch between multiple software to get your task
          done.
        </h1>
      </div>
      <div className="w-full rounded-2xl flex flex-col gap-20 justify-center items-center">
        <Image
          src="/collo/collo-sys.svg"
          width={2000}
          height={200}
          alt="Microservices Architecture. Spring Boot. Angular 16. Spring Cloud. Jhipster Gateway. Netflix Eureka Service Discovery. Jhipster Registry. Keycloack Oauth"
          className="rounded-md lg:rounded-lg"
        />
      </div>
      <Divider />
      <div className="w-full main-card p-4 lg:p-20 rounded-md lg:rounded-2xl flex flex-col gap-4 lg:gap-20 justify-center items-center">
        {[
          "L-dash.jpeg",
          "L-Kanban.svg",
          "L-members.jpeg",
          "L-meetings.jpeg",
          "L-task.jpeg",
          "L-chat.jpeg",
          "L-create-task.jpeg",
          "L-create-meeting.jpeg",
        ].map((image) => (
          <Image
            src={`/collo/${image}`}
            key={image}
            width={2000}
            height={200}
            alt="Vehicles, Inventory & Human ressources Management for Entreprises."
            className="rounded-sm lg:rounded-lg"
          />
        ))}
      </div>
      <Divider />
      <div className="w-full main-card p-4 lg:p-20 rounded-md lg:rounded-2xl grid grid-cols-2 gap-4 lg:gap-20 justify-center items-start">
        {["M-members.jpeg", "M-meetings.jpeg"].map((screen) => (
          <Image
            key={screen}
            src={`/collo/${screen}`}
            width={2000}
            height={1000}
            alt={screen}
            className="rounded-sm lg:rounded-lg bg-[#F2F7FF]"
          />
        ))}
      </div>
    </>
  );
}
