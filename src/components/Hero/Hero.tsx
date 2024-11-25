import React from "react";
import ConnectWallet from "../ConnectWallet";

function Hero() {
  return (
    <div className="py-[30vh]">
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
