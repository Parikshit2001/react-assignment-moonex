import About from "@/components/About/About";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

function page() {
  return (
    <div className="bg-[#071624] min-h-screen h-full text-white relative w-full lg:px-[100px] md:px-[50px] px-[20px] pt-[47px] font-raleway">
      <Navbar />
      <Hero />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}

export default page;
