"use client";

import { Collboration } from "@/data/Collaboration";
import Image from "next/image";
import React from "react";

const Collabration = () => {
  return (
    <div className="grid grid-cols-5 justify-center items-center gap-16">
      {Collboration.map((item, index) => {
        return (
          <Image
            key={index}
            height={100}
            width={100}
            className="w-36 h-12"
            src={item.icon}
            alt={item.name || "Collaboration icon"}
          />
        );
      })}
    </div>
  );
};

export default Collabration;
