"use client";
import { GrainyBg } from "@/app/page";
import Contact from "@/components/contact";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="relative">
      <GrainyBg />
      <Contact style="max-w-[1200px]" />
    </div>
  );
}
