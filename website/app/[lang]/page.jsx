import WhatWeAim from "../UI/home/aim/WhatWeAim";
import ContactForHome from "../UI/home/contactHome/ContactForHome";
import HeroSection from "../UI/home/heroSection/HeroSection";
import HowWork from "../UI/home/howWork/HowWork";
import TransitionEffect from "../UI/loading/TransitionEffect";
import { getDictionary } from "../../get-dictionary";
import Team from "../UI/home/team/Team";
import AboutHome from "../UI/home/about/AboutHome";

export default async function Home({ params: { lang } }) {
  const intl = await getDictionary(lang);
  return (
    <div>
      <TransitionEffect />
      <HeroSection t={intl} />
      <AboutHome t={intl} /> 
      <WhatWeAim t={intl} />
      <HowWork t={intl} />
      <Team t={intl} />
      <ContactForHome t={intl} />
    </div>
  );
}
