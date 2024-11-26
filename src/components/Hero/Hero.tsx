import React from "react";
import ConnectWallet from "../ConnectWallet";
import EllipticalCurve from "../SolarSystem/EllipticalCurve";
import Image from "next/image";
import Sun from "../SolarSystem/Sun";
import YellowTinge from "../SolarSystem/YellowTinge";

function Hero() {
  return (
    <div className="py-[30vh] relative lg:px-[50px] px-[20px]">
      <div className="hidden md:block">
        <EllipticalCurve className="absolute top-[70vh] right-[53vw] rotate-[15deg]" />
        <Image
          src={"/images/star.png"}
          width={20}
          height={20}
          alt="Star Img"
          className="absolute top-[15vh] left-[2vw] size-14"
        />
        <Image
          src={"/images/star.png"}
          width={20}
          height={20}
          alt="Star Img"
          className="absolute top-[60vh] right-[5vw] size-14"
        />
        <Image
          src={"/images/star.png"}
          width={20}
          height={20}
          alt="Star Img"
          className="absolute top-[5vh] right-[8vw] size-8"
        />
        <Sun className="absolute right-[8vw] top-[10vh]" />
        <YellowTinge className="absolute -right-[5vw] top-[20vh]" />
        <YellowTinge className="absolute -left-[20vh] -top-[30vh] rotate-45 h-[80vh] w-[80vh]" />
      </div>
      <div className="font-fira">
        <div className="text-6xl font-extrabold">
          <p>Trusted Multi-Chain</p>
          <p>
            <span className="text-yellow-400">DEX</span> Platform
          </p>
        </div>
        <div className="text-gray-400 text-xl">
          <p>Trade, earn and own crypto on the all-in-one multi-chain DEX</p>
        </div>
      </div>
      <div className="flex gap-10 pt-5">
        <ConnectWallet />
        <button className="rounded-full px-5 py-2 text-yellow-400 text-sm font-semibold hover:brightness-125 transition duration-50 font-raleway broder border-2 border-yellow-400">
          Trade Crypto
        </button>
      </div>
    </div>
  );
}

export default Hero;
