import React from "react";
import ContactForMe from "../../contact/contactForm/ContactForMe";

export default function ContactForHome({t}) {
  return (
    <div className="w-full min-h-screen bg-slate-100">
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 mx-auto max-w-6xl w-full">
        <div className="rounded-xl p-8 md:p-16 flex flex-col gap-8 bg-gray-800">
          <h2 className="font-bold text-5xl mb-8 text-white">{t.bizeulaşın}</h2>
          <ContactForMe t={t} />
        </div>
      </div>
    </div>
  );
}
