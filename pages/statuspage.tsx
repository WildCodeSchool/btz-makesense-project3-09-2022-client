import { useEffect, useState } from "react";
import axiosInstance from "../util/axiosInstances";
import Navbar from "../src/components/Navbar";
import Card from "../src/components/Card";
import Footer from "../src/components/Footer";
import Status from "../src/components/Status";

export default function statusPage() {
  const [decisions, setDecisions] = useState([]);
  const getAll = async () => {
    const { data } = await axiosInstance(
      `/decisions?userId=63168603-df08-46ed-8142-268511b154e0&user=include`
    );
    setDecisions(data);
    console.log(data);
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className=" flex-col justify-between">
      <Navbar />
      <h1 className="text-white pt-5 font-bold text-2xl text-center bg-[#24673A]">
        Decision status
      </h1>

      <div className=" w-screen h-screen flex flex-col md:flex-row justify-around items-center bg-[#24673A]">
        {decisions.map((dec) => (
          <Card decision={dec} />
        ))}
        <div className="flex flex-col justify-between space-y-5">
          <Status />
        </div>
      </div>
      <Footer />
    </div>
  );
}
