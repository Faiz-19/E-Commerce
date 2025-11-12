import React from "react";
import logo from "../assets/logo.png";
import insta_logo from "../assets/instagram_icon.png"
import pintester_logo from "../assets/pintester_icon.png"
import whatsapp_logo from "../assets/whatsapp_icon.png"

export default function Footer() {
  return (
    <footer className="flex items-center flex-col gap-8 text-zinc-800 my-10 px-4" >
      <div className="flex items-center gap-2.5">
        <img src={logo} alt="Shopper-Logo" />
        <p className="text-2xl font-semibold">SHOPPER</p>
      </div>
      <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-5">
        <button className="bg-zinc-100 p-2 border border-zinc-200 rounded-md">
          <img src={insta_logo} alt="Instagram" />
        </button>
        <button className="bg-zinc-100 p-2 border border-zinc-200 rounded-md">
          <img src={pintester_logo} alt="Pinterest" />
        </button>
        <button className="bg-zinc-100 p-2 border border-zinc-200 rounded-md">
          <img src={whatsapp_logo} alt="Whatsapp" />
        </button>
      </div>
      <div className="text-center w-full max-w-7xl">
      <hr className="w-full border-zinc-300" />
      <p className="p-3 text-sm">{`Copyright @ 2025 - All Right Reserved`}</p>
      </div>
    </footer>
  );
}