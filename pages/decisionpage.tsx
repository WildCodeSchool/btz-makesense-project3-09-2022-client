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
    <div className=" flex-col justify-between">
      <Navbar />
      <h1 className="text-white pt-5 font-bold text-2xl text-center bg-[#24673A]">
        My Decisions
      </h1>

      <div className=" w-screen h-screen flex-wrap flex flex-col md:flex-row justify-around items-center overflow-y-scroll bg-[#24673A]">
        {decisions.map((dec) => (
          <Card decision={dec} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
