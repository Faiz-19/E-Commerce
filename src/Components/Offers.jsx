import React from "react";
import offerSectionImg from "../assets/exclusive_image.png"


export default function Offers() {
  return (
    <section className="h-[100vh] w-[100vw] flex justify-center items-center ">
      <div className="w-[75vw] bg-linear-180 from-pink-200 to-white to-60% flex items-center justify-between">
        <div className="pl-36">
          <div className="flex flex-col text-5xl font-medium gap-5 my-5">
            <div>Exclusive</div>
            <div>Offers For You</div>
          </div>
          <p className="font-medium text-sm">ONLY ON BEST SELLERS PRODUCTS</p>
          <button className="bg-red-500 rounded-full p-3 px-10 text-white mt-5">
            Check Now
          </button>
        </div>
        <div>
          <img className="w-[70%]" src={offerSectionImg} alt="" />
        </div>
      </div>
    </section>
  );
}
