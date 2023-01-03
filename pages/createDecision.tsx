import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function createDecision() {
  return (
    <div className="w-screen h-full flex flex-col justify-between">
      <Navbar />
      <div className="bg-[#24673A] w-screen h-full">
        <form className="w-[60%] flex flex-col m-auto h-full space-y-10 mt-4 mb-4 md:w-[50%]">
          <input
            type="text"
            className=" w-full h-[50px] m-auto rounded-md p-3"
          />
          <textarea
            id="story"
            name="story"
            className=" w-full min-h-[200px] m-auto rounded-md p-3"
          >
            It was a dark and stormy night...
          </textarea>
          <textarea
            id="story"
            name="story"
            className=" w-full min-h-[200px] m-auto rounded-md p-3"
          >
            It was a dark and stormy night...
          </textarea>
          <textarea
            id="story"
            name="story"
            className=" w-full min-h-[200px] m-auto rounded-md p-3"
          >
            It was a dark and stormy night...
          </textarea>
          <textarea
            id="story"
            name="story"
            className=" w-full h-[200px] m-auto rounded-md p-3"
          >
            It was a dark and stormy night...
          </textarea>
          <textarea
            id="story"
            name="story"
            className=" w-full h-[200px] m-auto rounded-md p-3"
          >
            It was a dark and stormy night...
          </textarea>
          <button
            type="button"
            className="min-w-[200px] w-full h-15 py-2  bg-[#E36164] rounded-2xl text-white"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
