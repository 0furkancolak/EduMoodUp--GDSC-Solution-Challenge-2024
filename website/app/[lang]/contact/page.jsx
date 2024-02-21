import ContactHero from "@/app/UI/contact/heroSection/ContactHero";
import React from "react";
import { getDictionary } from "../../../get-dictionary";
import TransitionEffect from "@/app/UI/loading/TransitionEffect";
import Motion from "@/app/UI/motion/Motion";

export default async function ContactPage({ params: { lang } }) {
  const intl = await getDictionary(lang);
  return (
    <Motion>
      <TransitionEffect />
      <ContactHero t={intl} />
    </Motion>
  );
}
