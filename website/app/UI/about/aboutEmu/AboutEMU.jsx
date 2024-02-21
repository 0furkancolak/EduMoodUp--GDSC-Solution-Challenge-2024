import React from "react";
import AboutSlider from "./AboutSlider";
import Motion from "../../motion/Motion";

export default function AboutEMU({ t }) {
  return (
    <div className="bg-violet-600 w-full h-screen">
      <div className="flex items-center justify-center h-full px-4">
        <Motion
          initial={{ opacity: 0, y: +100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.85 }}
          className="max-w-6xl w-full relative mx-auto"
        >
          <AboutSlider t={t} />
        </Motion>
      </div>
    </div>
  );
}
