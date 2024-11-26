import Image from "next/image";
import React from "react";
import ConnectWallet from "../ConnectWallet";

function Navbar() {
  return (
    <nav className="flex justify-between items-center font-raleway lg:px-[50px] px-[20px]">
      <section className="flex items-center lg:gap-20 xl:gap-36 md:gap-12">
        <Image alt="Logo" src="/images/logo_1.png" height={20} width={150} />
        <div className=" items-center gap-12 font-bold hidden lg:flex">
          <button className="hover:text-yellow-100 text-yellow-400">
            Home
          </button>
          <button className="hover:text-yellow-100">About Us</button>
          <button className="hover:text-yellow-100">Roadmap</button>
          <button className="hover:text-yellow-100">FAQs</button>
          <button className="hover:text-yellow-100">Contact Us</button>
        </div>
      </section>
      <ConnectWallet />
    </nav>
  );
}

export default Navbar;
