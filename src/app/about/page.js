import Banner from "@/components/Banner";
import Collabration from "@/components/Collabration";
import Eventcard from "@/components/Eventcard";
import Teams from "@/components/Teams";
import { EventData } from "@/data/EventData";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Bloom",
  description: "About Bloom",
};

const page = () => {
  return (
    <section className="bg-[#F2F2F2] overflow-hidden">
      <div
        style={{ backgroundImage: `url('/background.png')` }}
        className={`lg:h-[70vh]  bg-no-repeat w-screen bg-contain bg-[#F2F2F2] bg-top flex flex-col gap-10 items-center`}
      >
        <div className="pt-28 relative flex items-center px-8 py-4 mt-8">
          <img
            src="/main.png" // Replace with the actual path to your side image
            alt="Decorative Lines"
            className="absolute left-2 mb-10 -translate-x-1/2 "
          />
          <p className="heading ">About Us</p>
        </div>
        <div>
          <p className="sub-heading ">
            A space to nurture your potential, connect with <br /> others, and
            explore your creativity.
          </p>
        </div>
      </div>
      <div className="mt-10 mb-10">
        <h1 className="typography">Our Mission</h1>
        <div className="bg-[#F2F2F2] px-5 lg:px-28 flex flex-col-reverse lg:flex-row justify-center items-center lg:gap-16">
          <p className="lg:text-xl text-center lg:text-start font-normal text-[#373737] lg:leading-[40px]">
            Our mission at Bloom is to create a nurturing environment where
            individuals can grow, learn, and connect with their inner potential.
            We believe in fostering creativity, mindfulness, and personal
            development through transformative experiences.{" "}
          </p>
          <img src="/about/mission1.png" alt="" />
        </div>
      </div>
      <div className="bg-white flex p-5 px-5 py-10 lg:px-28 items-center justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="px-5 lg:px-28 flex flex-col justify-center items-center "
          >
            <div className="bg-[#EFFFFD] lg:p-3 p-1 rounded-full">
              <img src={item.icon} className="max-w-24" alt="" />
            </div>
            <p className="lg:text-2xl font-normal text-[#00A59B] lg:leading-[40px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 mb-10">
        <h1 className="typography mt-10">Our Vission</h1>
        <div className="bg-[#F2F2F2] px-5 lg:px-28 flex flex-col mt-5 lg:flex-row justify-center items-center lg:gap-16 gap-5">
          <img src="/about/vision.png" alt="" />

          <p className="lg:text-xl font-normal text-center lg:text-start text-[#373737] lg:leading-[40px]">
            Our mission at Bloom is to create a nurturing environment where
            individuals can grow, learn, and connect with their inner potential.
            We believe in fostering creativity, mindfulness, and personal
            development through transformative experiences.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="typography mt-10">Our Programs </h1>
        <p className="text-center mt-10 lg:w-[50%] text-xl font-normal text-[#808080]  ">
          Participate in transformative workshops, community gatherings, and
          creative sessions designed to help you relax and grow. Every evening
          at Bloom is an opportunity to connect, learn, and rejuvenate in a
          welcoming environment.
        </p>
      </div>
      <div className="px-5 lg:px-28 mt-10 grid justify-center items-center lg:grid-cols-3  gap-20 ">
        {EventData.map((item, index) => (
          <Eventcard key={index} item={item} />
        ))}
      </div>

      <Teams />
      <div className="px-5 lg:px-28 pt-10 pb-10 bg-white">
        <h1 className="typography mb-10"> Collaboration</h1>
        <Collabration />
      </div>
      <Banner/>
    </section>
  );
};

export default page;

const data = [
  {
    icon: "/about/icon1.png",
    title: "Ascolto",
  },
  {
    icon: "/about/icon2.png",
    title: "Valorizzazione",
  },
  {
    icon: "/about/icon3.png",
    title: "Accoglienza",
  },
];
