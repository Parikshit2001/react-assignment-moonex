import React from "react";
import MyAccordian from "./MyAccordian";
import YellowTinge from "../SolarSystem/YellowTinge";

function FAQ() {
  return (
    <div className="pb-20 lg:px-[50px] px-[20px] overflow-x-hidden">
      <div className="hidden md:block absolute w-full">
        <YellowTinge className="absolute -right-[30vw] -translate-y-[20vh]" />
        <YellowTinge className="absolute -left-[30vw] translate-y-[20vh]" />
      </div>
      <div className="mx-auto bg-white bg-opacity-[3%] md:w-3/4 w-full rounded-lg">
        <p className="font-fira text-yellow-400 py-6 text-center text-4xl font-semibold border-b border-gray-800">
          FAQs
        </p>
        <div className="pb-6">
          <MyAccordian />
          <MyAccordian />
          <MyAccordian />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
