import Container from "@/components/Container";
import Eventcard from "@/components/Eventcard";
import TestimonialCard from "@/components/Testimonial";
import { EventData } from "@/data/EventData";
import { TestimonialData } from "@/data/Testimonial";
import React from "react";

const page = () => {
  return (
    <div>
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
          <p className="heading">Upcoming Events</p>
        </div>
        <div>
          <p className="sub-heading ">
            Join us for exciting activities that promote growth,
            <br /> learning, and creativity
          </p>
        </div>
      </div>
      <Container>
        <h1 className="typography mt-16">Upcoming Events: Bloom Days</h1>
        <p className="text-center mt-10  text-xl font-normal text-[#808080]  ">
          Participate in transformative workshops, community gatherings, and
          creative sessions designed to help you relax and grow. Every evening
          at Bloom is an opportunity to connect, learn, and rejuvenate in a
          welcoming environment.
        </p>
        <div className="mt-10 grid justify-center items-center grid-cols-3  gap-20">
          {EventData.map((item, index) => (
            <Eventcard key={index} item={item} />
          ))}
        </div>
      </Container>
      <div className="bg-[#F2F2F2]">
        <Container>
          <h1 className="typography mt-16 pt-16">
            Upcoming Events: Bloom Days
          </h1>
          <p className="text-center mt-10  text-xl font-normal text-[#808080]  ">
            These could be based on popularity, limited availability, or special
            occasions.
          </p>
          <div className="mt-10 grid justify-center items-center grid-cols-3  gap-20">
            {EventData.map((item, index) => (
              <Eventcard key={index} item={item} />
            ))}
          </div>

          <h1 className="typography pt-16">What customer says</h1>

          <div className=" bg-gray-100 grid grid-cols-3 gap-10 mt-16 p-4">
            {TestimonialData.map((data, index) => {
              return <TestimonialCard data={data} key={index} />;
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default page;
