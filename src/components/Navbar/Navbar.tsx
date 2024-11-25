import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center font-raleway">
      <section className="flex items-center lg:gap-36 md:gap-12">
        <Image alt="Logo" src="/images/logo_1.png" height={20} width={150} />
        <div className="md:flex items-center gap-12 font-bold hidden">
          <button className="hover:text-yellow-100 text-yellow-400">Home</button>
          <button className="hover:text-yellow-100">About Us</button>
          <button className="hover:text-yellow-100">Roadmap</button>
          <button className="hover:text-yellow-100">FAQs</button>
          <button className="hover:text-yellow-100">Contact Us</button>
        </div>
      </section>
      <button className="rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 px-4 py-2 text-black text-sm font-semibold hover:brightness-125 transition duration-50">
        Connect Wallet
      </button>
    </nav>
  );
}

export default Navbar;
