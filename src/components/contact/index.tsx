"use client";
import { motion } from "framer-motion";
import { BsFillSendFill } from "react-icons/bs";
import { sendEmail } from "./sendMail";
import { useState } from "react";
import InternBadge from "../Hero/intern-badge";

export default function Contact(props: { style?: string }) {
  const [formSubmit, setFormSubmit] = useState(false);
  return (
    <div className={props.style}>
      <div className="absolute top-10 right-[-164px]">
        <YoSVG />
      </div>
      <div className={`py-16 relative`}>
        {/* <InternBadge /> */}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="gradient-heading text-8xl font-black font-heading max-w-[1400px] leading-tight z-10"
        >
          Leave a message
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-text text-3xl font-light font-par max-w-[1400px] leading-tight pb-20"
        >
          If you{`'`}re looking for a hire, a project quote or just to connect.
          <br />
          <span className="text-brand">Make sure to hit me up!</span>
        </motion.h1>
        <form action={sendEmail}>
          <div className="flex gap-5 w-full">
            <div className="flex flex-col gap-2 w-full py-3">
              <label
                className="text-text font-light text-[16px]"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                required
                className="rounded-md bg-[#d4d4d4] h-8 py-5 px-3 text-background placeholder-[#78716c] font-light"
                type="email"
                name="email"
                placeholder="your-email@example.com"
              />
            </div>
            <div className="flex flex-col gap-2 w-full py-3">
              <label
                className="text-text font-light text-[16px]"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                required
                className="rounded-md bg-[#d4d4d4] h-8 py-5 px-3 text-background placeholder-[#78716c] font-light"
                placeholder="Your Subject"
                type="text"
                name="subject"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full py-3 pb-10">
            <label
              className="text-text font-light text-[16px]"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              required
              name="message"
              placeholder="Your message"
              className="rounded-md bg-[#d4d4d4] h-32 p-5 font-light text-background placeholder-[#78716c]"
            />
          </div>
          {formSubmit ? (
            <div className="w-full px-8 py-3 border border-brand rounded-md flex gap-3 items-center justify-center text-text">
              Message Sent Succesfully
            </div>
          ) : (
            <motion.button
              initial={{ scale: 1, background: "#cf7761" }}
              whileHover={{ scale: 1, background: "#D7CDCB" }}
              transition={{ type: "tween", duration: 0.5 }}
              type="submit"
              className="w-full bg-brand px-8 py-3 rounded-md font-bold text-[black] flex gap-3 items-center justify-center"
              onClick={() => setFormSubmit(true)}
            >
              <BsFillSendFill />
              Send Message
            </motion.button>
          )}
        </form>
      </div>{" "}
    </div>
  );
}

const YoSVG = () => {
  return (
    <motion.svg
      width="1015"
      height="281"
      viewBox="-10 -7 1035 291"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, strokeWidth: 30 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 3,
        }}
        d="M1015 201C1015 201 932 182.5 681.5 255C431 327.5 472.5 10.0001 431 10.0001C389.5 10.0001 397 232 331 232C265 232 403 10.0002 349.5 10.0001C296 10 277 270.5 0 270.5"
        stroke="#CF7761"
        stroke-width="20"
      />
    </motion.svg>
  );
};
