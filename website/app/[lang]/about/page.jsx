import React from "react";
import AboutExtra from "@/app/UI/about/aboutExtra/AboutExtra";
import { getDictionary } from "@/get-dictionary";
import TransitionEffect from "@/app/UI/loading/TransitionEffect";
import AboutHome from "@/app/UI/home/about/AboutHome";

export default async function About({ params: { lang } }) {
  const intl = await getDictionary(lang);

  return (
    <div>
      <TransitionEffect />
      <AboutHome bg={"bg-violet-600"} t={intl} />
      <AboutExtra t={intl} />
    </div>
  );
}
