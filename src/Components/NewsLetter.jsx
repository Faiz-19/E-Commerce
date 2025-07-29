import React from "react";

export default function NewsLetter() {
  return (
    <section className="h-[50vh] w-[100vw] flex justify-center my-10">
      <div className="w-[75vw] bg-linear-180 from-pink-200 to-white to-40%">
        <div className="flex flex-col gap-5 my-20 items-center text-zinc-600">
          <div className="text-4xl font-semibold">
            Get Exclusive Offers On Your Email
          </div>
          <p className="font-light">
            Subscribe to our newsLetter and stay updated
          </p>
          <div className="border border-zinc-300 rounded-full text-sm flex items-center w-[50%] justify-between">
            <input className="pl-7" type="email" placeholder="Your Email Id" />
            <input
              className="bg-black rounded-full h-13 w-[30%] text-white"
              type="submit"
              value="Subscribe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
