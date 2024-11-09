"use client";

import Container from "@/components/Container";
import Carousel from "@/components/CrouselR";

const Services = () => {
  return (
    <div id="service" className=" mx-5 lg:mx-28">
      <h1 className="typography mt-16"> Nostro Servizi</h1>
      <p className="text-center mt-10  text-xl font-normal text-[#808080]">
        Un Percorso di Crescita per Tutti Per Genitori e Bambini: Offriamo un
        supporto <br /> completo per lo sviluppo emotivo e cognitivo dei
        bambini, aiutando i genitori a coltivare <br /> un ambiente ricco di
        creatività e apprendimento.
      </p>
      <div className="px-28 mt-10">
          <Carousel data={data} />
      </div>
    </div>
  );
};

export default Services;

const data = [
  {
    title: "Per Studenti",
    image: "/service/icon.png",
    description:
      "Potenzia il tuo percorso accademico con risorse educative, mentoring e  attività che ti aiutano a scoprire nuove possibilità e a raggiungere i tuoi  obiettivi.",
  },
  {
    title: "Per Studenti",
    image: "/service/icon.png",
    description:
      "Potenzia il tuo percorso accademico con risorse educative, mentoring e  attività che ti aiutano a scoprire nuove possibilità e a raggiungere i tuoi  obiettivi.",
  },
  {
    title: "Per Studenti",
    image: "/service/icon.png",
    description:
      "Potenzia il tuo percorso accademico con risorse educative, mentoring e  attività che ti aiutano a scoprire nuove possibilità e a raggiungere i tuoi  obiettivi.",
  },
];
