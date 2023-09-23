import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export const ProjectLink = (props: { title: string; link: string }) => {
  return (
    <motion.div
      initial={{ background: "#050505" }}
      whileHover={{ background: "#cf7761" }}
      transition={{ type: "tween", duration: 0.5 }}
      className="w-fit h-fit pb-[2px]"
    >
      <motion.div
        whileHover={{ color: "#cf7761" }}
        transition={{ type: "tween", duration: 0.5 }}
        className="flex gap-2 items-center justify-end text-text project-link bg-background"
      >
        <Link href={props.link} target="_blank">
          {props.title}{" "}
        </Link>
        <FiArrowUpRight />{" "}
      </motion.div>{" "}
    </motion.div>
  );
};
