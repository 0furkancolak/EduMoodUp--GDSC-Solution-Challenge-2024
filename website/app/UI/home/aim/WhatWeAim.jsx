import React from "react";
import SingleAim from "./SingleAim";

export default function WhatWeAim({ t }) {
  const aims = [
    {
      id: 1,
      title: t.eğitim,
      description:t.amacegitim,
    },
    {
      id: 2,
      title: t.çalışma,
      description: t.amaccalisma,
    },
    {
      id: 3,
      title: t.hayat,
      description: t.amachayat,
    },
    {
      id: 4,
      title: t.world,
      description: t.amacdunya,
    },
  ];
  return (
    <div className="w-full min-h-screen bg-emerald-500">
      <div className="min-h-screen flex py-10 md:py-0 px-5 md:px-0 flex-col items-center justify-center gap-6 mx-auto max-w-6xl w-full">
        <h1 className="font-bold text-5xl text-white mb-8">
          {t.neyiamaçlıyoruz}?
        </h1>
        <div className="grid md:grid-cols-2 gap-4">
          {aims.map((aim) => (
            <SingleAim key={aim.id} aim={aim} />
          ))}
        </div>
      </div>
    </div>
  );
}
