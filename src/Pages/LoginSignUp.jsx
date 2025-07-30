import React from "react";

export default function LoginSignUp() {
  return (
    <section className=" flex flex-col items-center justify-center  h-[100vh] w-[100vw] bg-linear-180 from-pink-100 from-80% to-white ">
      <div className="bg-white w-[35vw] h-[60vh] p-10">
        <h1 className="font-semiboldbold text-2xl">Sign Up</h1>
        <div className="flex flex-col gap-5 my-3 text-zinc-500">
          <input className="border border-zinc-200 p-2" type="text" placeholder="Your Name" />
          <input className="border border-zinc-200 p-2" type="email" placeholder="Email Address" />
          <input className="border border-zinc-200 p-2" type="password" placeholder="Password" />
          <input className="bg-red-500 text-white p-2 cursor-pointer" type="submit" value="Continue" />
        </div>
        <p className="text-zinc-500 mb-1">
          Already have an account?<span className="font-bold text-red-600"> Login here</span>
        </p>
        <div className="flex gap-3 text-zinc-500">
          <input type="checkbox" name="" id="" />
          <p>By continuing,i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </section>
  );
}
