import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../src/components/Navbar";
import axiosInstance from "../../util/axiosInstances";
import StatusBar from "../../src/components/StatusBar";
import { TDecision, TStatus } from "../../src/types/main";
import StatusForm from "../../src/components/StatusForm";
import Footer from "../../src/components/Footer";
import ImpactedPeople from "../../src/components/ImpactedPeople";

export default function MyDecisionStatus() {
  const { query } = useRouter();

  const [decision, setDecision] = useState<
    (TDecision & { status: TStatus[] }) | null
  >(null);

  const getDecisionWithStatus = async () => {
    const { data } = await axiosInstance.get(
      `/decisions/${query.decisionId}?status=include`
    );
    setDecision(data);
  };

  useEffect(() => {
    if (query.decisionId) {
      getDecisionWithStatus();
    }
  }, [query]);

  return (
    <div className="w-screen full  bg-[#196C84]">
      <Navbar />
      <div className="flex flex-col md:flex-row  gap-5 justify-between">
        <div className="flex flex-row bg-white justify-start gap-10 pl-3 pb-1 md:flex-col">
          <StatusBar />
          <ImpactedPeople />
        </div>
        <div className="flex w-full px-5 md:pr-28 flex-col">
          {decision?.status
            .sort((a, b) => {
              if (a.order > b.order) {
                return 1;
              }
              return -1;
            })
            .map((status) => (
              <StatusForm status={status} name={status.name} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
