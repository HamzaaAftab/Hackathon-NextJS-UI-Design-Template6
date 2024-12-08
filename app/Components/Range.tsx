import Image from "next/image";
import Link from "next/link";
import React from "react";


const Range = () => {
  return (
    <Link href='/product'>
    <div className="px-4 py-8 sm:px-8 md:px-12 lg:px-16">
      {/* Header Section */}
      <div className="text-center space-y-2 mt-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Browse The Range
        </h1>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid mt-8 gap-6 px-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={"/1.png"}
              width={330}
              height={250}
              alt="Dining"
              className="object-cover"
            />
          </div>
          <p className="text-lg font-medium text-gray-700">Dining</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={"/2.png"}
              width={330}
              height={250}
              alt="Living"
              className="object-cover"
            />
          </div>
          <p className="text-lg font-medium text-gray-700">Living</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={"/3.png"}
              width={330}
              height={250}
              alt="Bedroom"
              className="object-cover"
            />
          </div>
          <p className="text-lg font-medium text-gray-700">Bedroom</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Range;
