import Banner from "@/components/Banner";
import Container from "@/components/Container";
import { CommunityData } from "@/data/CommunityData";
import Image from "next/image";

export const metadata = {
  title: "Bloom Community",
  description: "Bloom Community",
};

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
          <p className="heading">Our Community</p>
        </div>
        <div className="flex">
          <Image src="/sign.png" alt="sign" width={350} height={100} />
        </div>
      </div>
      <Container>
        <div class={`flex  flex-col mt-16 gap-16 justify-center items-center `}>
          {CommunityData.map((item, index) => {
            return (
              <div
                key={index}
                id={item.section}
                className={`flex ${
                  index % 2 == 0 ? "flex-row" : "flex-row-reverse"
                } gap-20 rounded-xl justify-center items-center`}
              >
                <div
                  className={`flex flex-col justify-center items-start gap-5 p-7 `}
                >
                  <Image
                    src={item.icon}
                    className=" max-h-96 max-w-96 object-contain"
                    alt=""
                    height={300}
                    width={350}
                  />
                  <div>
                    <h1 className="text-3xl font-semibold text-[#00A896] text-center ">
                      {item.title}
                    </h1>
                  </div>
                </div>
                <div className="flex  justify-center items-start  gap-5  ">
                  <p className="text-[#373737] text-2xl font-normal ">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <Banner />
    </section>
  );
};

export default page;
