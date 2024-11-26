import React from "react";
import FeatureCard from "./FeatureCard";
import YellowTinge from "@/components/SolarSystem/YellowTinge";

function Features() {
  return (
    <div className="w-full py-20">
      <div className="hidden md:block">

      <YellowTinge className="absolute -translate-y-[50vh] translate-x-[15vw]" />
      </div>
      <div className="flex justify-center items-center pb-12">
        <p className="self-center text-4xl font-fira font-bold">
          Out <span className="text-yellow-400">Features</span>
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
}

export default Features;
