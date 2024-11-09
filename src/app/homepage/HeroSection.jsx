import React from "react";

const HeroSection = () => {
  return (
    <section className="flex w-screen justify-between items-center gap-0">
      <div className=" px-16 flex flex-col gap-10">
        <h1 className="text-[#00A59B] text-6xl font-bold ">
          Bloom in Your Space <br /> in Your Time
        </h1>
        <p className="text-[#1B1B1B] text-2xl font-medium ">
          An oasis of pedagogy where you can <br /> flourish at any age through{" "}
          <br />
          transformative experiences of <br /> learning, co-creation, and
          community.
        </p>
        <div className="flex gap-7">
          <button className="bg-[#00A59B] text-white px-6 py-2 rounded-lg mt-4">
            Register Now
          </button>
          <button className="bg-transparent border-[3px] border-[#8bc6c2] font-semibold text-[#005E64] px-6 py-2 rounded-lg mt-4">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex ">
        <img src="/home/hero.png" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
