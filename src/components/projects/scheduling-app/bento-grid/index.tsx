import Image from "next/image";

export default function BentoGrid() {
  return (
    <div className="flex gap-5 h-[600px] w-[900px]">
      {/* Bento grid 1 */}
      <div className="bento-card-bg bg-brand">
        <div className="bento-card h-[600px] w-[440px] flex flex-col p-10 pb-0 rounded-2xl justify-between overflow-hidden items-center">
          <div className="flex flex-col gap-[20px]">
            <h1 className="font-medium font-heading text-[white] text-3xl">
              Ease of use
              <br />
              <span className="text-[#BCCFEA]">Clear Instructions</span>
              <br />
              Simplcitiy
            </h1>
            <p className="font-par text-text text-[16px] font-light leading-8">
              Every action is laid out to the user with clear intensions,
              organized in a way to make it easy and simple.{" "}
            </p>
          </div>
          <div className="overflow-hidden w-max">
            <Image
              src="/scheduling-app/grid-1.svg"
              width={600}
              height={400}
              alt="1"
              className="ml-36 mt-[50px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 h-full w-full">
        {/* Bento grid 2 */}
        <div className="bento-card-bg">
          <div className="bento-card h-[290px] w-[440px] flex flex-col p-8 gap-8 pt-0 rounded-2xl justify-between overflow-hidden items-center">
            <div className="overflow-hidden w-max img-shadow flex justify-center items-center relative">
              <Image
                src="/scheduling-app/grid-2.svg"
                width={600}
                height={400}
                alt="1"
                className="img-shadow"
              />
              <div className="absolute opacity-40 bg-background w-full h-full"></div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-medium font-heading text-[white] text-xl">
                Mobile Navigation Bar
              </h1>
              <p className="font-par text-text text-[16px] font-light leading-8">
                Navigation bar on mobile devices, so that it has the feel of a
                native mobile application.{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Bento grid 3 */}
        <div className="bento-card-bg">
          <div className="bento-card h-[290px] w-[440px] flex flex-col p-8 gap-8 pb-0 rounded-2xl justify-between overflow-hidden items-center">
            <div className="flex flex-col gap-2">
              <h1 className="font-medium font-heading text-[white] text-xl">
                Responsive & Inforamtive
              </h1>
              <p className="font-par text-text text-[16px] font-light leading-8">
                The user gets a response according to their use case scenarios &
                their actions.{" "}
              </p>
            </div>
            <div className="overflow-hidden w-max">
              <Image
                src="/scheduling-app/grid-3.svg"
                width={400}
                height={400}
                alt="1"
                className="ml-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
