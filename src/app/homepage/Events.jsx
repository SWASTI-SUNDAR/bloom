import Container from "@/components/Container";
import Eventcard from "@/components/Eventcard";
import TestimonialCard from "@/components/Testimonial";
import { EventData } from "@/data/EventData";
import { TestimonialData } from "@/data/Testimonial";

function Events() {
  return (
    <div>
      <Container>
        <h1 className="typography mt-10 lg:mt-16">
          Upcoming Events: Bloom Days
        </h1>
        <p className="text-center lg:mt-10  lg:text-xl font-normal text-[#808080]  ">
          Participate in transformative workshops, community gatherings, and
          creative sessions designed to help you relax and grow. Every evening
          at Bloom is an opportunity to connect, learn, and rejuvenate in a
          welcoming environment.
        </p>
        <div className="mt-10 grid justify-center items-center lg:grid-cols-3 grid-cols-1 gap-20">
          {EventData.map((item, index) => (
            <Eventcard key={index} item={item} />
          ))}
        </div>
      </Container>
      <div className="bg-[#F2F2F2] mt-10 lg:mt-10">
        <Container>
          <h1 className="typography pt-5 lg:pt-16">What customer says</h1>
           <div className=" bg-gray-100 grid lg:grid-cols-3 gap-10 lg:mt-16 p-4">
            {TestimonialData.map((data, index) => {
              return <TestimonialCard data={data} key={index} />;
            })}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Events;
