import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../src/components/Navbar";

import Editor from "../../src/components/Editor";
import axiosInstance from "../../util/axiosInstances";
import Status from "../../src/components/Status";
import { TDecision, TStatus } from "../../src/types/main";
import StatusForm from "../../src/components/StatusForm";
import Footer from "../../src/components/Footer";

const defaultDecisionStatus = {
  id: "",
  content: "",
  decisionId: "",
  order: 1,
  name: "",
};

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
      <div className="flex flex-row pl-5">
        <Status />
        <div className="flex w-full pr-40 flex-col">
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
