import Container from "./Container";

const Banner = () => {
  return (
    <div className=" lg:px-28 mx-auto">
      <div
        className={`lg:bg-[url("/banner.png")] bg-[#00A896] lg:bg-transparent  lg:h-[67vh] mt-16 pb-16
             lg:bg-contain bg-cover  flex justify-center 
            items-start p-16 flex-col lg:gap-12 gap-5   
            bg-no-repeat mx-auto`}
      >
        <h1 className="text-[#F3FDFD] font-semibold lg:text-4xl">
          Ready to Get Started?
        </h1>
        <p className="text-[#F3FDFD] font-semibold lg:text-2xl">
          Book a tour of our coworking space today and discover how Bloom can{" "}
          <br />
          support your work and creativity
        </p>
        <button
          type="button"
          className="focus:outline-none rounded-xl bg-white text-[#00A896] hover:scale-95 duration-300 py-2 px-4"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
