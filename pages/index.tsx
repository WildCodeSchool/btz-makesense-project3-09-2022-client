import { useState, useEffect } from "react";

import Link from "next/link";

import Card from "../src/components/Card";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import axiosInstance from "../util/axiosInstances";
import { IDecisiontWithUser } from "../src/types/main";

export default function Home() {
  const [decisions, setDecisions] = useState<IDecisiontWithUser[]>([]);

  const getDecisions = async () => {
    const { data } = await axiosInstance("/decisions?user=include");
    setDecisions(data);
  };

  useEffect(() => {
    getDecisions();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="h-screen w-screen">
        {/* <SideBar /> */}
        <div className="flex flex-row justify-center ">
          <Link
            href="/createdecision"
            className="min-w-[200px] w-[5%] h-15 py-2 text-center bg-[#E36164] rounded-2xl text-white mt-4"
          >
            Create a decision
          </Link>
        </div>
        <h1 className="font-bold ml-2">Decisions started</h1>
        <div className="bg-[#196C84]">
          <div className="flex flex-row overflow-x-scroll pt-2 pb-20 min-h-[20vh]">
            {decisions.map((decision) => (
              <Card decision={decision} />
            ))}
          </div>
          <h1 className="font-bold text-white ml-2">First decisions made</h1>
          <div className="flex flex-row overflow-x-scroll pt-2 pb-20 min-h-[20vh]">
            {/* <Card />
          <Card />
          <Card /> */}
          </div>
        </div>
        <h1 className="font-bold text-black ml-2 ">Final decisions made</h1>
        <div className="flex flex-row overflow-x-scroll pt-2 pb-20 min-h-[20vh]">
          {/* <Card />
        <Card />
        <Card /> */}
        </div>
        <Footer />
      </div>
    </div>
  );
}
