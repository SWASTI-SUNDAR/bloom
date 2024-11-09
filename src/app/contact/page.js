"use client";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";



const page = () => {
  return (
    <section className="bg-[#F2F2F2] min-h-screen">
      <div
        style={{ backgroundImage: `url('/background.png')` }}
        className={` h-[59vh]  bg-no-repeat w-screen bg-cover  bg-top flex flex-col gap-10 items-center`}
      >
        <div className="pt-28 relative flex items-center px-8 py-4 mt-8">
          <img
            src="/main.png" // Replace with the actual path to your side image
            alt="Decorative Lines"
            className="absolute left-2 mb-10 -translate-x-1/2 "
          />
          <p className="heading">Contact Us</p>
        </div>
        <div className="flex">
          <Image src="/sign.png" alt="sign" width={350} height={100} />
        </div>
      </div>
      <Container>
        <div className="grid mt-16 grid-cols-3 gap-10">
          {ContactData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex bg-white shadow-lg rounded-xl flex-col justify-center p-5 gap-5"
              >
                <div className="rounded-2xl bg-[#EFFFFD]  w-fit p-2 ">
                  <Image src={item.icon} alt="" height={10} width={25} />
                </div>
                <div className="flex flex-col justify-center gap-3 items-start ">
                  <h1 className="text-2xl font-semibold text-black ">
                    {item.title}
                  </h1>
                  <p className="font-extralight">{item.desc}</p>
                  <p>{item.additional}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <Contact />
    </section>
  );
};

export default page;

const ContactData = [
  {
    icon: "/contact/icon1.png",
    title: "Chat to support",
    desc: "We are here to help.",
    additional: "bloom@bloom-bi.it",
  },
  {
    icon: "/contact/icon2.png",
    title: "Visit Us",
    desc: "Visit our office",
    additional: "1234 Street Name, City Name",
  },
  {
    icon: "/contact/icon3.png",
    title: "Contact Us",
    desc: "Mor-Fri 9am-12pm",
    additional: "+123 456 7890",
  },
];
