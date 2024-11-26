import React from "react";

function Sun({ className }: { className?: string }) {
  return <div className={`w-[10vw] h-[10vw] rounded-full bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 rotate-[30deg] ${className}`}/>
    
}

export default Sun;
