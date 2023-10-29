import Image from "next/image";

export const GrainyBg = () => {
  return (
    <div className="absolute top-48 md:top-0 z-0 md:h-auto md:w-auto flex flex-col items-center justify-center ">
      <Image
        src="/Ellipse.svg"
        width={1600}
        height={500}
        alt="ellipse"
        className="hide-small block absolute left-[-40px] blur-2xl lg:left-0 top-0 md:top-48 lg:top-64 xl:top-32 3xl:top-44 lg:blur-3xl opacity-60"
      />
      <Image
        src="/Ellipse.svg"
        width={1600}
        height={500}
        alt="ellipse"
        className="block md:hidden absolute left-0 blur-xl lg:left-[-100px] top-0 md:top-48 lg:top-64 xl:top-32 3xl:top-44 lg:blur-3xl opacity-20"
      />
      <Image
        src="/noise.svg"
        width={3600}
        height={500}
        alt="noise"
        className="relative"
      />
      <Image
        src="/noise.svg"
        width={3600}
        height={500}
        alt="noise"
        className="relative hide-small md:block xl:hidden"
      />
    </div>
  );
};
