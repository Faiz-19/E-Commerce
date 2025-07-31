import React from "react";
import offerSectionImg from "../assets/exclusive_image.png"

export default function Offers() {
  return (
    <section className="w-full flex justify-center items-center my-10 py-10 px-4">
      <div className="w-full max-w-7xl bg-linear-180 from-pink-200 to-white to-60% flex flex-col lg:flex-row items-center justify-between p-8 md:p-14 rounded-lg">
        <div className="text-center lg:text-left">
          <div className="flex flex-col text-4xl md:text-5xl font-medium gap-2 my-5">
            <div>Exclusive</div>
            <div>Offers For You</div>
          </div>
          <p className="font-medium text-sm uppercase">ONLY ON BEST SELLERS PRODUCTS</p>
          <button className="bg-red-500 rounded-full py-3 px-10 text-white mt-5 hover:bg-red-600">
            Check Now
          </button>
        </div>
        <div className="mt-8 lg:mt-0">
          <img className="w-full max-w-sm" src={offerSectionImg} alt="Exclusive Offer" />
        </div>
      </div>
    </section>
  );
}