import React from "react";
import NewDesingSlider from "./NewDesingSlider";
import Motion from "../../motion/Motion";

export default function AboutExtra({ t }) {
  const vals1 = [
    {
      id: 1,
      title: t.duygusalzeka,
      description: t.duygusalzekatext,
      bgColor: "008cff",
    },
    {
      id: 2,
      title: t.erisilebilirogrenim,
      description: t.erisilebilirogrenimtext,
      bgColor: "0ab86f",
    },
    {
      id: 3,
      title: t.isteesitlik,
      description: t.isteesitliktext,
      bgColor: "d37a07",
    },
    {
      id: 4,
      title: t.ishayatindaesitlik,
      description: t.ishayatindaesitliktext,
      bgColor: "76a30c",
    },
    {
      id: 5,
      title: t.geleceginisgucu,
      description: t.geleceginisgucutext,
      bgColor: "b40a2f",
    },
  ];
  const vals2 = [
    {
      id: 1,
      title: t.adilisdunyasi,
      description: t.adilisdunyasietext,
      bgColor: "008cff",
    },
    {
      id: 2,
      title: t.duygusalzekavekariyer,
      description: t.duygusalzekavekariyeretext,
      bgColor: "0ab86f",
    },
    {
      id: 3,
      title: t.degisimeuyum,
      description: t.degisimeuyumtext,
      bgColor: "d37a07",
    },
    {
      id: 4,
      title: t.cesitlilikteguc,
      description: t.cesitliliktegucetext,
      bgColor: "76a30c",
    },
    {
      id: 5,
      title: t.toplumsaladalet,
      description: t.toplumsaladalettext,
      bgColor: "b40a2f",
    },
  ];
  return (
    <div className="bg-lime-100 w-full md:h-screen min-h-screen">
      <div className="flex flex-col px-0 py-4 md:py-0 md:flex-row gap-6 md:gap-0 max-w-6xl w-full h-full items-center justify-center">
        <Motion
          initial={{ opacity: 0, y: +100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative mx-auto flex items-center w-full justify-center"
        >
          <NewDesingSlider t={t} vals={vals1} />
        </Motion>
        <Motion
          initial={{ opacity: 0, y: +100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.20 }}
          className="relative mx-auto"
        >
          <NewDesingSlider t={t} vals={vals2} />
        </Motion>
      </div>
    </div>
  );
}
