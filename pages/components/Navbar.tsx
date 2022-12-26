import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <div className="h-16 w-full bg-white">
      <div className="flex justify-end ">
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
      <div className="flex flex-row justify-between mt-2 mr-2">
        <h1 className="font-bold font-sans ml-2 text-3xl">
          make
          <button
            type="button"
            aria-label="logo design"
            className="border-solid h-2 w-3 bg-yellow-400 rounded-t-lg"
          />
          sense
        </h1>
        <RxHamburgerMenu size={30} />
      </div>
    </div>
  );
}
