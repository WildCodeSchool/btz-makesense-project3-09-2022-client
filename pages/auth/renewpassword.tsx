import React from "react";
import Link from "next/link";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";

export default function renewPassword() {
  return (
    <div className="w-screen h-screen">
      <div className="h-[7%] w-full bg-white">
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
        </div>
      </div>
      <div className="w-screen h-[86%] bg-[#196C84] mt-2 py-10">
        <div className="flex  flex-col  justify-around align-middle items-center shadow-md md:w-[400px] lg:w-[500px] rounded-[50px] space-y-3  bg-white  w-1/2 h-[50%] border-2  p-5  md:p-10 lg:p-16 my-32 mx-auto">
          <h1 className="font-bold text-[#196C84]  text-xl ">Renew Password</h1>
          <div className="flex flex-row flex-wrap w-[180px] md:w-full">
            <p className="text-xs text-right ">
              Please insert the email associated with this account
            </p>
          </div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            className="w-full  h-6 border-b border-b-black mx-10"
          />

          <button
            type="button"
            className="w-full h-15 py-2  bg-[#E36164] rounded-2xl text-white"
          >
            {" "}
            Send
          </button>
          <Link href="./signup">Sign Up</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
