import React from "react";

export default function NewsLetter() {
  return (
    <section className="w-full flex justify-center my-10 py-10">
      <div className="w-[90%] md:w-[75vw] bg-linear-180 from-pink-200 to-white to-40% flex flex-col gap-5 py-10 md:py-20 items-center text-zinc-600 px-4 text-center rounded-lg">
          <div className="text-2xl md:text-4xl font-semibold">
            Get Exclusive Offers On Your Email
          </div>
          <p className="font-light">
            Subscribe to our newsletter and stay updated
          </p>
          <div className="border border-zinc-300 rounded-full text-sm flex flex-col sm:flex-row items-center w-full max-w-lg mt-4 overflow-hidden">
            <input className="pl-7 py-3 w-full sm:w-auto flex-grow bg-transparent" type="email" placeholder="Your Email Id" />
            <input
              className="bg-black rounded-full h-full w-full sm:w-auto mt-2 sm:mt-0 py-3 px-8 text-white cursor-pointer hover:bg-zinc-800"
              type="submit"
              value="Subscribe"
            />
          </div>
      </div>
    </section>
  );
}