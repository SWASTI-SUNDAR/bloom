import Banner from "@/components/Banner";
import Container from "@/components/Container";
import { ServiceData } from "@/data/ServiceData";
import React from "react";

function page() {
  return (
    <section className="bg-[#F2F2F2] min-h-screen">
      <div
        style={{ backgroundImage: `url('/background.png')` }}
        className={` h-[70vh]  bg-no-repeat w-screen bg-contain bg-[#F2F2F2] bg-top flex flex-col gap-10 items-center`}
      >
        <div className="pt-28 relative flex items-center px-8 py-4 mt-8">
          <img
            src="/main.png" // Replace with the actual path to your side image
            alt="Decorative Lines"
            className="absolute left-2 mb-10 -translate-x-1/2 "
          />
          <p className="heading ">Explore Our Services</p>
        </div>
        <div>
          <p className="sub-heading ">
            We offer personalized services designed to help <br /> you grow,
            learn, and create
          </p>
        </div>
      </div>
      <Container>
        <div className="mt-10 flex flex-col justify-center gap-16 items-center">
          {ServiceData.map((item, index) => (
            <div
              key={index}
              className={`flex justify-center items-center flex-col ${
                index % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }  gap-20`}
            >
              <div className="bg-white p-3 border-[1px] rounded-3xl">
                <img src={item.icon} alt="" />
              </div>
              <div className="flex flex-col lg:w-1/2 gap-7">
                <p className="text-3xl font-semibold text-[#008C95] leading-[40px]">
                  {item.title}
                </p>
                <span className="text-[#373737] text-xl">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Banner />
    </section>
  );
}

export default page;
