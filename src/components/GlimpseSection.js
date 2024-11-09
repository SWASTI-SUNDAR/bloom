// components/GlimpseSection.js
import Image from "next/image";

export default function GlimpseSection() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-teal-500">
        A Glimpse Inside
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {/* Large Image */}
        <div className="col-span-2 row-span-2">
          <Image
            src="/images/image1.png" // Update the path to your images
            alt="Office Image 1"
            width={500}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Smaller Images */}
        <div className="col-span-1">
          <Image
            src="/images/image2.png" // Update the path to your images
            alt="Office Image 2"
            width={250}
            height={200}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="col-span-1">
          <Image
            src="/images/image3.png" // Update the path to your images
            alt="Office Image 3"
            width={250}
            height={200}
            className="rounded-lg object-cover w-96 h-full"
          />
        </div>
        <div className="col-span-2">
          <Image
            src="/images/image4.png" // Update the path to your images
            alt="Office Image 4"
            width={500}
            height={200}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
