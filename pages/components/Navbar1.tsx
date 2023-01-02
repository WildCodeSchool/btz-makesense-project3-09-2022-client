import React from "react";

export default function Navbar1() {
  return (

    <div className="h-[7%] w-full bg-white">
      <div className="flex justify-end">

   
        <button type="button" className="font-sans text-xs mr-2">
          FR
        </button>{" "}
        <button type="button" className="font-sans text-xs mr-2">
          EN
        </button>{" "}
        <button type="button" className="font-sans text-xs mr-2">
          ES
        </button>
      </div>
      <h1 className="font-bold font-sans ml-2 text-3xl">
        make
        <button
          type="button"
          aria-label="logo design"
          className="border-solid h-2 w-3 bg-yellow-400 rounded-t-lg"
        />
        sense
      </h1>
    </div>
  );
}
