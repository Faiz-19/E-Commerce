import React from "react";
import logo from "../assets/logo.png";
import insta_logo from "../assets/instagram_icon.png"
import pintester_logo from "../assets/pintester_icon.png"
import whatsapp_logo from "../assets/whatsapp_icon.png"

export default function Footer() {
  return (
    <footer className="flex items-center flex-col gap-10  text-zinc-800 " >
      <div className="flex items-center gap-2.5">
        <img src={logo} alt="Shopper-Logo" />
        <p className="text-2xl font-semibold">SHOPPER</p>
      </div>
      <ul className="flex gap-10">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-10">
        <button className=" bg-zinc-100 p-2 border border-zinc-200">
          <img src={insta_logo} alt="" />
        </button>
        <button className=" bg-zinc-100 p-2 border border-zinc-200">
          <img src={pintester_logo} alt="" />
        </button>
        <button className=" bg-zinc-100 p-2 border border-zinc-200">
          <img src={whatsapp_logo} alt="" />
        </button>
      </div>
      <div className="text-center">
      <hr className="w-[75vw] border border-zinc-300" />
      <p className="p-3">{`Copyright @ 2025-All Right Reserved`}</p>
      </div>
    </footer>
  );
}
