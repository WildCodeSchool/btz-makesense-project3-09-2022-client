import React, { useEffect, useState } from "react";

import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Card from "../src/components/Card";
import axiosInstance from "../util/axiosInstances";
import { useAuth } from "../src/context/UserContext";

export default function decisionPage() {
  const [decisions, setDecisions] = useState([]);
  const { user } = useAuth();
  const getAll = async () => {
    const { data } = await axiosInstance(
      `/decisions?userId=${user?.id}&user=include`
    );
    setDecisions(data);
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen bg-[#24673A]">
        <h1 className="text-white font-bold text-2xl text-center pt-10 pb-10">
          My Decisions
        </h1>
        <div className="my-32 flex flex-row  justify-around overflow-x-scroll ">
          {decisions.map((dec) => (
            <Card decision={dec} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
