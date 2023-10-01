import { motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

export default function InternBadge() {
  return (
    <div className="hide-small py-1 px-2 rounded-3xl bg-badge sm:flex gap-2 w-fit items-center relative overflow-hidden">
      <FiAlertCircle style={{ color: "black" }} className="z-10 bg-badge" />
      <motion.p
        initial={{ x: -600 }}
        animate={{ x: 0 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatDelay: 5,
          delay: 3,
        }}
        className="text-[black] font-light text-sm md:text-base w-max"
      >
        Currently looking for a 6-month end-of-studies internship.
      </motion.p>
      <motion.p
        initial={{ x: 20 }}
        animate={{ x: 600 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatDelay: 5,
          delay: 3,
        }}
        className="text-[black] font-light absolute w-max text-sm md:text-base"
      >
        Currently looking for a 6-month end-of-studies internship.
      </motion.p>
    </div>
  );
}
