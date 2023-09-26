import Image from "next/image";
import BentoGrid from "./bento-grid";
import { Divider } from "@/components/divider";

export default function SchedulingApp() {
  const mobileScreens = [
    "Mobile-availability-list",
    "Mobile-availability-edit",
    "Mobile-report-page",
    "Mobile-sign-in-page",
    "Mobile-public-schedule-page",
    "Mobile-public-schedule-timeslots",
  ];
  const largeScreens = [
    "L-sign-in-page",
    "L-availabilty-list",
    "L-availabilty-new",
    "L-availability-edit",
    "L-profile-settings",
    "L-report-page",
  ];
  return (
    <>
      <div className="flex flex-col w-full pb-20 gap-5">
        <h1 className="font-heading text-[white] text-3xl ">
          A Complete UI Refresh
        </h1>
        <h1 className="font-par text-text 3xl:text-[20px] md:text-[16px] max-w-5xl leading-10 font-light">
          This project not only revitalized the app&apos;s aesthetics but also
          improved its functionality, ultimately delivering a more user-friendly
          and visually appealing scheduling platform.
        </h1>
      </div>
      <div className="w-full main-card py-32 rounded-2xl flex justify-center items-center">
        <BentoGrid />
      </div>
      <Divider />
      <div className="w-full main-card p-20 rounded-2xl flex flex-col gap-20 justify-center items-center">
        {largeScreens.map((screen) => (
          <Image
            key={screen}
            src={`/scheduling-app/${screen}.svg`}
            width={2000}
            height={1000}
            alt={screen}
            className="rounded-lg"
          />
        ))}
      </div>
      <Divider />
      <div className="w-full main-card p-20 rounded-2xl grid grid-cols-3 gap-20 justify-center items-center">
        {mobileScreens.map((screen) => (
          <Image
            key={screen}
            src={`/scheduling-app/${screen}.svg`}
            width={2000}
            height={1000}
            alt={screen}
            className="rounded-lg bg-[#F2F7FF]"
          />
        ))}
      </div>
    </>
  );
}
