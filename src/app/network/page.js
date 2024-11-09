import Banner from "@/components/Banner";
import Container from "@/components/Container";
import { NetworkData } from "@/data/Network";
import Image from "next/image";

export const metadata = {
  title: "Bloom Network",
  description: "Bloom Network",
};

const page = () => {
  return (
    <section className="bg-[#F2F2F2] min-h-screen">
      <div
        style={{ backgroundImage: `url('/background.png')` }}
        className={` h-[60vh]  bg-no-repeat w-screen bg-cover  bg-top flex flex-col gap-10 items-center`}
      >
        <div className="pt-28 relative flex items-center px-8 py-4 mt-8">
          <img
            src="/main.png" // Replace with the actual path to your side image
            alt="Decorative Lines"
            className="absolute left-2 mb-10 -translate-x-1/2 "
          />
          <p className="heading">Our Network</p>
        </div>
        <div className="flex">
          <Image src="/sign.png" alt="sign" width={350} height={100} />
        </div>
      </div>
      <Container>
        <h1 className="typography mt-10">Our networks</h1>
        <p className="text-center mt-10  text-xl font-normal text-[#808080]  ">
          We collaborate with leading institutions, schools, and companies to
          nurture creativity, inspire learning, and foster growth. Our
          partnerships create opportunities for shared knowledge and impactful
          projects.
        </p>
        <div className="grid grid-cols-3 mt-16 gap-10">
          {NetworkData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex bg-white rounded-xl flex-col justify-center items-center gap-5"
              >
                <div className="rounded-full w-full  ">
                  <Image src={item.icon} alt="" height={300} width={500} />
                </div>
                <div className="flex flex-col justify-center gap-5 items-start  p-3">
                  <h1 className="text-2xl font-semibold text-black ">
                    {item.title}
                  </h1>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-3 mt-16">
          <div className=" basis-2/3 flex justify-between p-3 bg-white rounded-xl items-center">
            <div className="flex  flex-col justify-center p-10 gap-10">
              <p className="text-[#008C95] font-semibold">Bloom's Network</p>
              <h1 className="text-4xl font-semibold ">
                Our network is a <br /> ecosystem of partnerships <br /> and
                collaborations
              </h1>
              <p className="font-medium">
                Connecting Minds, Expanding Horizons
              </p>
            </div>

            <div>
              <Image
                src="/network/icon.png"
                alt="network"
                width={500}
                height={200}
              />
            </div>
          </div>
          <div className="bg-white rounded-xl basis-1/3 p-5 flex flex-col justify-center items-start gap-10 ">
            {Data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex  flex-col justify-center items-start gap-1"
                >
                  <h1 className="text-3xl font-semibold text-[#008C95] ">
                    {item.title}
                  </h1>
                  <p className="ml-3 text-lg font-medium">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <Banner />
    </section>
  );
};

export default page;

const Data = [
  {
    id: 1,
    title: "+150",
    desc: "Students benift",
  },
  {
    id: 2,
    title: "+50",
    desc: "Associations collaborated",
  },
  {
    id: 3,
    title: "+100",
    desc: "Companies partnered",
  },
];
