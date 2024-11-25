import React from "react";

function FeatureCard() {
  return (
    <div className="bg-white bg-opacity-[3%] rounded-lg px-8 py-8 border border-gray-800 h-[33vh]">
      <div className="mb-8 flex justify-center items-center bg-white bg-opacity-[5%] rounded-full size-20 text-3xl font-semibold">
        $
      </div>
      <div className="space-y-3 pr-8">
        <p className="text-xl font-semibold">Cheapest TXs</p>
        <p>
          Exchange popular digital currencies at the cheapest possible
          transaction price
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
