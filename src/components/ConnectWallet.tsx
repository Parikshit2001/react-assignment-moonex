import React from "react";

function ConnectWallet({ className }: { className?: string }) {
  return (
    <button
      className={`rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 px-4 py-2 text-black text-sm font-semibold hover:brightness-125 transition duration-50 font-raleway ${className}`}
    >
      Connect Wallet
    </button>
  );
}

export default ConnectWallet;
