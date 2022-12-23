import React from "react";
import Card from "./components/Card";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold">Decisions started</h1>
      <div className="bg-[#196C84]">
        <div className="flex flex-row overflow-x-scroll  pt-2 pb-20">
          <Card /> <Card /> <Card />
          <Card />
          <Card />
        </div>
        <h1 className="font-bold text-white">First decisions made</h1>
        <div className="flex flex-row overflow-x-scroll pt-2 pb-20">
          <Card /> <Card /> <Card />
          <Card />
          <Card />
        </div>
      </div>
      <h1 className="font-bold text-black">Final decisions made</h1>
      <div className="flex flex-row overflow-x-scroll pt-2 pb-20">
        <Card /> <Card /> <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
