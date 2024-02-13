import React from "react";

const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4 ">
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://techcrunch.com/wp-content/uploads/2024/02/starship-snow-fleet.jpg?w=850&h=492&crop=1"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          Starship Technologies raises $90M as its sidewalk robots pass 6M
          deliveries
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>London firm builds 'data-driven deal sourcing tools</p>
          <div className="flex space-x-2 text-sm">
            <p>Jun 2023</p>
            <p>July 2023</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          Early stage European venture capital (VC) firm Episode 1 has closed
          its third fund at £76 million ($95 million), as the London-based
          investor turns to in-house “data-driven deal sourcing tools” to find
          the next big thing. Founded in 2013, Episode 1 has a handful of exits
          to its name from the 70 or so companies it’s
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
