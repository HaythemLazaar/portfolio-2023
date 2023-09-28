import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export const ProjectLink = (props: {
  title: string;
  link: string;
  bg?: string;
}) => {
  return (
    <motion.div
      initial={{ background: props.bg ? props.bg : "#050505" }}
      whileHover={{ background: "#cf7761" }}
      transition={{ type: "tween", duration: 1 }}
      className="w-fit h-fit pb-[2px]"
    >
      <motion.div
        whileHover={{ color: "#cf7761" }}
        transition={{ type: "tween", duration: 0.5 }}
        className={`flex gap-2 items-center font-extralight justify-end text-text project-link ${
          props.bg ? "bg-[" + props.bg + "]" : "bg-background"
        }`}
      >
        <Link href={props.link} target="_blank">
          {props.title}{" "}
        </Link>
        <FiArrowUpRight />{" "}
      </motion.div>{" "}
    </motion.div>
  );
};
