import React from "react";

const SectionWithBackground = ({ title, description }) => {
  return (
    <div className="lg:h-[70vh] lg:bg-[url('/background.png')] bg-no-repeat w-screen bg-contain bg-[#F2F2F2] bg-top flex flex-col lg:gap-10 items-center relative">
      {/* Background image for mobile view */}
      <img
        src="/bg_mobile.png"
        className="w-screen lg:hidden absolute top-10 z-0 inset-0"
        alt=""
      />

      {/* Main content section */}
      <div className="lg:pt-28 pt-16 relative flex items-center px-8 py-4 mt-8 z-20">
        <img
          src="/main.png"
          alt="Decorative Lines"
          className="absolute w-10 -ml-1 lg:w-auto lg:left-2 mb-10 -translate-x-1/2 z-10"
        />
        <div className="flex flex-col z-30">
          <p className="heading">{title}</p>
        </div>
      </div>

      {/* Subheading text with line breaks */}
      <div className="z-30 mt-4">
        <p className="sub-heading text-white">
          {description.split("<br />").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default SectionWithBackground;
