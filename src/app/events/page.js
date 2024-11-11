import Container from "@/components/Container";
import Eventcard from "@/components/Eventcard";
import SectionWithBackground from "@/components/SectionWithBackground";
import TestimonialCard from "@/components/Testimonial";
import { EventData } from "@/data/EventData";
import { TestimonialData } from "@/data/Testimonial";
import React from "react";

const page = () => {
  return (
    <div className="overflow-hidden">
      <SectionWithBackground
        title="Events"
        description="Join us for exciting activities that promote growth,
            <br /> learning, and creativity"
      />
      <Container>
        <h1 className="typography mt-16">Upcoming Events: Bloom Days</h1>
        <p className="text-center mt-10  text-xl font-normal text-[#808080]  ">
          Participate in transformative workshops, community gatherings, and
          creative sessions designed to help you relax and grow. Every evening
          at Bloom is an opportunity to connect, learn, and rejuvenate in a
          welcoming environment.
        </p>
        <div className="mt-10 grid justify-center items-center grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-20">
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
          <div className="mt-10 grid justify-center items-center grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-20">
            {EventData.map((item, index) => (
              <Eventcard key={index} item={item} />
            ))}
          </div>

          <h1 className="typography pt-10 lg:pt-16">What customer says</h1>

          <div className=" bg-gray-100 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:mt-16 p-4">
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
