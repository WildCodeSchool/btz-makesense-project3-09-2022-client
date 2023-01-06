import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import { TDecision } from "../../src/types/main";
import axiosInstance from "../../util/axiosInstances";

export default function Details() {
  const [decision, setDecision] = useState<TDecision>();
  const { query } = useRouter();

  const getDecision = async () => {
    const { data } = await axiosInstance(`/decisions/${query.id}`);
    setDecision(data);
  };
  useEffect(() => {
    if (query.id) {
      getDecision();
    }
  }, [query]);

  if (!decision) return <div>No decision</div>;

  return (
    <div className="flex flex-col w-full h-screen justify-between ">
      <Navbar />

      <div className="flex flex-col w-screen h-screen mx-auto bg-[#196C84] mt-3">
        <div
          id={decision.id}
          className="w-3/4 h-12 mt-5 mx-auto bg-white rounded-md pl-1"
        >
          {decision.title}
        </div>
        <div
          id="content"
          className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll mt-5 rounded-md pl-1"
        >
          <h1>{decision.benefits}</h1>
        </div>
        <div
          id={decision.id}
          className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll mt-5 rounded-md pl-1"
        >
          <h1>{decision.details}</h1>
        </div>
        <div
          id="content"
          className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll mt-5 rounded-md pl-1"
        >
          <h1>{decision.risks}</h1>
        </div>
        <div
          id="content"
          className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll mt-5 rounded-md pl-1"
        >
          <h1>{decision.impact}</h1>
        </div>
        <div
          id="content"
          className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll mt-5 rounded-md pl-1"
        >
          <h1>{decision.context}</h1>
        </div>
        <div
          id="deadline"
          className="w-3/4 h-12 mt-5 mx-auto bg-white mb-5 rounded-md pl-1"
        >
          {decision.deadline.substring(8, 10)}/
          {decision.deadline.substring(5, 7)}/
          {decision.deadline.substring(0, 4)}
        </div>
      </div>
      <Footer />
    </div>
  );
}
