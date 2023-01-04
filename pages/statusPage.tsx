import React from "react";
import Navbar from "../src/components/Navbar";
import Card from "../src/components/Card";
import Footer from "../src/components/Footer";
import Status from "../src/components/Status";

export default function statusPage() {
  return (
    <div className=" flex-col justify-between">
      <Navbar />
      <h1 className="text-white pt-5 font-bold text-2xl text-center bg-[#24673A]">
        Decision status
      </h1>

      <div className=" w-screen h-screen flex flex-col md:flex-row justify-around items-center bg-[#24673A]">
        <Card />
        <div className="flex flex-col justify-between space-y-5">
          <Status />
        </div>
      </div>
      <Footer />
    </div>
  );
}
