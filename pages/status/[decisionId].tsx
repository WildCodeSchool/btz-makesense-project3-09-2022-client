import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../src/components/Navbar";
import axiosInstance from "../../util/axiosInstances";

import { TDecision, TStatus } from "../../src/types/main";
import StatusForm from "../../src/components/StatusForm";
import Footer from "../../src/components/Footer";

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
        <div className="flex w-full px-10  flex-col md:px-20 lg:px-30">
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
