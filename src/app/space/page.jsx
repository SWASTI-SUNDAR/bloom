import Banner from "@/components/Banner";
import Container from "@/components/Container";
import GlimpseSection from "@/components/GlimpseSection";
import SpaceCard from "@/components/SpaceCard";
import { SpaceData, SpacewhyData } from "@/data/SpaceData";
import Image from "next/image";

export const metadata = {
  title: "Our Space",
  description: "Bloom Community",
};

const page = () => {
  return (
    <section className="bg-[#F2F2F2]">
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
          <p className="heading">Our space</p>
        </div>
        <div>
          <p className="sub-heading ">
            Whether you're here to study, participate in <br /> workshops, or
            holistic activities to your needs.
          </p>
        </div>
      </div>

      <Container>
        <h1 className="text-5xl font-semibold text-[#00A59B] mt-10 text-start">
          Take a Look Inside👀
        </h1>
        <div className="grid grid-cols-3 mt-10 gap-5">
          {SpaceData.map((item, index) => {
            return <SpaceCard key={index} item={item} />;
          })}
        </div>
      </Container>
      <div className="bg-white mt-10">
        <h1 className="typography pt-10">Why Choose Our Space?</h1>
        <div className="flex mt-16 justify-center items-center gap-10 lg:px-36 mx-auto">
          {SpacewhyData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-5"
              >
                <div className="bg-[#EFFFFD] p-5 rounded-full">
                  <Image src={item.src} alt="" height={50} width={50} />
                </div>
                <div className="flex mb-10">
                  <h1 className="text-2xl font-normal text-[#00A59B]">
                    {item.title}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <GlimpseSection />
      <Banner />
    </section>
  );
};

export default page;
