import React from "react";
import hand_icon from "../assets/hand_icon.png";
import rightArrow from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

export default function Hero() {
  return (
    <section className="h-[100vh] bg-linear-180 from-pink-200 to-white to-60% flex items-center justify-between">
      <div className="pl-36">
        <p className="font-medium text-xl">NEW ARRIVALS ONLY</p>
        <div className="flex flex-col text-6xl font-bold  gap-2 my-5">
          <div className="flex gap-2">
            new
            <img className="w-17 h-15" src={hand_icon} alt="" />
          </div>
          <div className="">collections</div>
          <div>for everyone</div>
        </div>

        <button className="bg-red-500 rounded-full p-3 px-4  flex gap-1 items-center text-white mt-10">
          Latest Collections
          <img className="p-1 w-7 h-5" src={rightArrow} alt="" />
        </button>
      </div>
      <div><img className="w-[70%]" src={hero_image} alt="" /></div>
    </section>
  );
}
