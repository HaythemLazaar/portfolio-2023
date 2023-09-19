import Link from "next/link";
import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col gap-3 py-8 z-20">
        <div className="py-1 px-2 rounded-3xl bg-background flex gap-2 w-fit items-center">
          <div className="w-2 h-2 rounded-full bg-[green]" />
          <p className="text-[white] font-light">haythem.lazaar1@gmail.com</p>
        </div>
        <div className="py-1 px-2 rounded-3xl bg-badge flex gap-2 w-fit items-center">
          <FiAlertCircle style={{ color: "black" }} />
          <p className="text-[black] font-light">
            Currently looking for a 6-month end-of-studies internship.
          </p>
        </div>
      </div>

      <h1 className="font-heading font-black max-w-7xl text-8xl text-text z-20">
        I desgin & create{" "}
        <span
          style={{
            color: "#CF7761",
          }}
        >
          Software Products
        </span>
      </h1>
      <div className="flex gap-5 py-10 z-20">
        <Link href="">
          {" "}
          <button className="bg-brand px-8 py-3 rounded-3xl font-light text-[black] flex gap-3 items-center">
            <div className="w-2 h-2 rounded-full bg-[green]" />
            Reach Out
          </button>
        </Link>

        <Link href="">
          <button className="border border-brand px-8 py-3 rounded-3xl font-light">
            View Work
          </button>
        </Link>
      </div>
    </>
  );
}
