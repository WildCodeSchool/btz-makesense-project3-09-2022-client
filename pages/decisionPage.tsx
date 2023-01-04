import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Card from "../src/components/Card";

export default function decisionPage() {
  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen bg-[#24673A]">
        <h1 className="text-white font-bold text-2xl text-center pt-10 pb-10">
          My Decisions
        </h1>
        <div className="my-32 flex flex-row  justify-around overflow-x-scroll ">
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}
