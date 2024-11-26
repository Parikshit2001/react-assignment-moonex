import React from "react";
import MyAccordian from "./MyAccordian";

function FAQ() {
  return (
    <div className="pb-20 lg:px-[100px] md:px-[50px] px-[20px]">
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
