import React from "react";

export default function LoginSignUp() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full bg-pink-50 p-4">
      <div className="bg-white w-full max-w-md p-8">
        <h1 className="font-semibold text-2xl">Sign Up</h1>
        <div className="flex flex-col gap-5 my-5">
          <input className="border border-zinc-300 p-3" type="text" placeholder="Your Name" />
          <input className="border border-zinc-300 p-3" type="email" placeholder="Email Address" />
          <input className="border border-zinc-300 p-3" type="password" placeholder="Password" />
          <input className="bg-red-500 text-white p-3 cursor-pointer hover:bg-red-600" type="submit" value="Continue" />
        </div>
        <p className="text-zinc-500 mb-2">
          Already have an account?
          <span className="font-bold text-red-600 cursor-pointer"> Login here</span>
        </p>
        <div className="flex gap-3 items-center text-zinc-500">
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">By continuing, I agree to the terms of use & privacy policy</label>
        </div>
      </div>
    </section>
  );
}