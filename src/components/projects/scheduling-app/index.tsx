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
        <h1 className="font-heading text-[white] text-xl lg:text-3xl ">
          A Complete UI Refresh
        </h1>
        <h1 className="font-par text-text 3xl:text-[20px] text-[16px] max-w-5xl leading-7 lg:leading-10 font-light">
          This project not only revitalized the app&apos;s aesthetics but also
          improved its functionality, ultimately delivering a more user-friendly
          and visually appealing scheduling platform.
        </h1>
      </div>
      <div className="w-full main-card py-6 lg:py-32 rounded-md lg:rounded-2xl flex justify-center items-center">
        <BentoGrid />
      </div>
      <Divider />
      <div className="w-full main-card p-4 lg:p-20 rounded-md lg:rounded-2xl flex flex-col gap-4 lg:gap-20 justify-center items-center">
        {largeScreens.map((screen) => (
          <Image
            key={screen}
            src={`/scheduling-app/${screen}.svg`}
            width={2000}
            height={1000}
            alt={screen}
            className="rounded-sm lg:rounded-lg"
          />
        ))}
      </div>
      <Divider />
      <div className="w-full main-card p-4 lg:p-20 rounded-md lg:rounded-2xl grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-20 justify-center items-center">
        {mobileScreens.map((screen) => (
          <Image
            key={screen}
            src={`/scheduling-app/${screen}.svg`}
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
