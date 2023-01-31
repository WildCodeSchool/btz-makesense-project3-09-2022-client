import React from "react";
import Link from "next/link";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
// eslint-disable-next-line import/order
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function profil() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="w-screen h-[86%] bg-[#C62E43] py-24 items-center justify-around align-middle flex flex-col md:flex-row-reverse  ">
        <div className="flex flex-col justify-center my-5 mx-5 items-center shadow-md rounded-[50px] space-y-3 bg-white py-24 px-10 w-[300px] md:w-[360px]  max-h-[350px] h-1/2 border-2  lg:w-[360px] ">
          <h1 className="font-bold text-[#C62E43] min-w-[170px] text-center text-3xl">
            My Details
          </h1>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            className="w-full h-6 border-b text-left border-b-black min-w-[170px]"
          />
          <button
            type="button"
            className="w-[82%] h-15 py-2 min-w-[170px] bg-[#E36164] rounded-2xl text-white"
          >
            {" "}
            Update
          </button>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="password"
            className="w-full h-6 min-w-[170px] border-b border-b-black "
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="confirm password"
            className="w-full h-6 min-w-[170px] border-b border-b-black "
          />

          <button
            type="button"
            className="w-[82%] h-15 py-2 min-w-[170px] bg-[#E36164] rounded-2xl text-white"
          >
            {" "}
            Update
          </button>
          <p>
            <Link href="/">{}</Link>
          </p>
        </div>
        <div className="flex flex-col justify-center  my-5 mx-5 items-center shadow-md  rounded-[50px] space-y-3 bg-white py-24 px-16 w-[300px] md:w-[360px] h-1/2 border-2  max-h-[350px]  lg:w-[360px] ">
          <h1 className="font-bold text-[#C62E43] text-3xl">Photo</h1>
          <div className="wrapper">
            <AiOutlineCloudUpload size={120} />
          </div>
          <button
            type="button"
            className="w-full h-15 py-2  bg-[#E36164] min-w-[170px] rounded-2xl text-white"
          >
            {" "}
            Upload
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
