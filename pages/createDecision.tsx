import { useState } from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Editor from "../src/components/Editor";

export default function createDecision() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState<string | undefined>("**Hello world!!!**");
  return (
    <div className="w-screen h-full flex flex-col justify-between">
      <Navbar />
      <div className="bg-[#24673A] w-screen h-full">
        <form className="w-[60%] flex flex-col m-auto h-full space-y-10 mt-4 mb-4 md:w-[50%]">
          <input
            type="text"
            className=" w-full h-[50px] m-auto rounded-md p-3"
            placeholder="Title"
          />
          <div className="container">
            <p className="text-white font-semibold">Content:</p>
            <Editor />
          </div>

          <div className="container">
            <p className="text-white font-semibold">Impact on organisation:</p>
            <Editor />
          </div>
          <div className="container">
            <p className="text-white font-semibold">Context around decision:</p>
            <Editor />
          </div>
          <div className="container">
            <p className="text-white font-semibold">Risks:</p>
            <Editor />
          </div>
          <div className="container">
            <p className="text-white font-semibold">Benefits:</p>
            <Editor />
          </div>
          <label htmlFor="impacted" className="text-white font-medium">
            Impacted People:
            <input
              type="text"
              id="impacted"
              className=" w-full h-[50px] m-auto rounded-md p-3 "
            />
          </label>
          <label htmlFor="deadline" className="text-white font-medium">
            Deadline:
            <input
              type="date"
              id="deadline"
              className=" w-full h-[50px] m-auto rounded-md p-3"
            />
          </label>

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
