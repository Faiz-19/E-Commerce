import React from "react";
import hand_icon from "../assets/hand_icon.png";
import rightArrow from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

export default function Hero() {
  return (
    <section className="bg-linear-180 from-pink-200 to-white to-60% flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 py-10 lg:py-0 min-h-screen text-center lg:text-left">
      <div className="lg:pl-24">
        <p className="font-medium text-lg md:text-xl">NEW ARRIVALS ONLY</p>
        <div className="flex flex-col text-4xl md:text-6xl font-bold gap-2 my-5">
          <div className="flex gap-2 items-center justify-center lg:justify-start">
            new
            <img className="w-12 h-12 md:w-16 md:h-16" src={hand_icon} alt="" />
          </div>
          <div className="">collections</div>
          <div>for everyone</div>
        </div>

        <button className="bg-red-500 rounded-full p-3 px-6 flex gap-2 items-center text-white mt-5 mx-auto lg:mx-0 text-lg">
          Latest Collections
          <img className="w-6 h-4" src={rightArrow} alt="" />
        </button>
      </div>
      <div className="mt-10 lg:mt-0 flex-shrink-0">
        <img
          className="w-full max-w-xs md:max-w-md lg:max-w-lg"
          src={hero_image}
          alt="Hero"
        />
      </div>
    </section>
  );
}