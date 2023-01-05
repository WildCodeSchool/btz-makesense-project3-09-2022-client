import { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

import { IDecisiontWithUser } from "../src/types/main";
import axiosInstance from "../util/axiosInstances";

export default function details() {
  const [decisions, setDecisions] = useState<IDecisiontWithUser[]>([]);

  const getDecisions = async () => {
    const { data } = await axiosInstance("/decisions?user=include");
    setDecisions(data);
  };
  useEffect(() => {
    getDecisions();
  }, []);
  return (
    <div className="flex flex-col w-full h-screen justify-between bg-blue-800">
      <Navbar />

      {decisions.map((decision) => (
        <div className="flex flex-col w-screen h-screen mx-auto ">
          <div id={decision.id} className="w-3/4 h-12 mt-5 mx-auto bg-white">
            {decision.title}
          </div>
          <div
            id="content"
            className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll mt-5"
          >
            <h1>{decision.benefits}</h1>
          </div>
          <div
            id={decision.id}
            className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll mt-5"
          >
            <h1>{decision.details}</h1>
          </div>
          <div
            id="content"
            className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll mt-5"
          >
            <h1>{decision.risks}</h1>
          </div>
          <div
            id="content"
            className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll mt-5"
          >
            <h1>{decision.impact}</h1>
          </div>
          <div
            id="content"
            className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll mt-5"
          >
            <h1>{decision.context}</h1>
          </div>
          <div id="deadline" className="w-3/4 h-12 mt-5 mx-auto bg-white mb-5">
            {decision.deadline}
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}
