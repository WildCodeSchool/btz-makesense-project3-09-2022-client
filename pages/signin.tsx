import React from "react";
import Link from "next/link";
import Navbar1 from "./components/Navbar1";
import Footer from "./components/Footer";

export default function signin() {
  return (
    <div className="h-screen w-screen">
      <Navbar1 />
      <div className="w-screen h-[86%] bg-[#196C84] py-10">
        <div className="flex  flex-col  justify-center align-middle items-center shadow-md md:w-[400px] lg:w-[500px] rounded-[50px] space-y-3  bg-white p-28 w-1/2 h-1/2 border-2  my-32 mx-auto">
          <h1 className="font-bold text-[#196C84]  text-3xl">Sign In</h1>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            className="min-w-[200px] w-full h-6 border-b border-b-black "
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Mot de passe"
            className="min-w-[200px] w-full h-6 border-b border-b-black "
          />{" "}
          <p className="text-xs text-right w-full">
            <Link href="./renewPassword">Mot de passe oubliéé?</Link>
          </p>
          <button
            type="button"
            className="min-w-[200px] w-full h-15 py-2  bg-[#E36164] rounded-2xl text-white"
          >
            {" "}
            Sign In
          </button>
          <p>
            <Link href="./signUp">Sign Up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
