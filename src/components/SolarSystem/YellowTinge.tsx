import React from "react";

function YellowTinge({ className }: { className?: string }) {
  return (
    <div className={`w-[50vw] h-[50vh] rounded-[50%] bg-opacity-[10%] bg-yellow-300 blur-3xl ${className}`} />
  );
}

export default YellowTinge;
