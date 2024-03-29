"use client";
import { motion } from "framer-motion";

export default function TransitionEffect() {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0  right-full w-screen h-screen z-300 bg-blue-800"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-200 bg-white/90"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-100 bg-black/90"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
}
