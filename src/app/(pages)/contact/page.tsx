"use client";
import Contact from "@/components/contact";
import { GrainyBg } from "@/components/grainy-bg";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="relative">
      <GrainyBg />
      <Contact style="max-w-[1200px]" />
    </div>
  );
}
