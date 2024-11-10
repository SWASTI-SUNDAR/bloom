"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const data = [
  {
    title: "Nostro Progetto",
    to: "projects",
  },
  {
    title: "Nostro Spazio",
    to: "space",
  },
  {
    title: "Le Nostre Servizi",
    to: "service",
  },
  {
    title: "Eventi",
    to: "events",
  },
];

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures that `react-scroll` only runs on the client side
    setIsClient(true);
  }, []);

  return (
    <div className="bg-[#F2F2F2] pt-10">
      <div className="flex flex-col justify-center items-center p-3 gap-5 bg-white pt-16">
        <Image
          src="/logo/logo.png"
          alt="Logo"
          width={100}
          height={48}
          className=""
        />
        <p>FIORIRE NEL TUO SPAZIO COL TUO TEMPO</p>
        <div className="lg:flex flex-col hidden lg:flex-row items-start justify-start gap-5">
          {isClient &&
            data.map((item, index) => (
              <ScrollLink
                activeClass="active-link"
                className="font-medium cursor-pointer"
              >
                {item.title}
              </ScrollLink>
            ))}
        </div>
        <div className="flex gap-3">
          <Image
            src="/footer/insta.png"
            alt="Instagram"
            width={24}
            height={24}
          />
          <Image
            src="/footer/facebook.png"
            alt="Facebook"
            width={24}
            height={24}
          />
          <Image
            src="/footer/linkedin.png"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </div>
        <div className="h-0.5 w-[90vw] lg:w-[60vw] bg-black"></div>
        <div className="flex flex-col justify-start items-start font-semibold lg:flex-row gap-1 lg:gap-5">
          <p>© 2024 Bloom All rights reserved</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
