import { Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#051422] py-14 pb-10 flex justify-between -mx-[100px] px-[100px]">
      <div>
        <Image
          src={"/images/logo_2.png"}
          width={125}
          height={125}
          alt="Moonex Logo"
        />
      </div>
      <div className="flex font-bold gap-16">
        <button>Roadmap</button>
        <button>About Us</button>
        <button>FAQs</button>
        <button>Contact Us</button>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-3xl font-bold">
          Contact <span className="text-yellow-400">Us</span>
        </p>
        <div className="flex justify-between">
          <button>
            <Twitter />
          </button>
          <button>
            <Twitter />
          </button>
          <button>
            <Twitter />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
