import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../../src/components/Navbar";
import Footer from "../../../src/components/Footer";
import axiosInstance from "../../../util/axiosInstances";
import Editor from "../../../src/components/Editor";
import { TDecision, User } from "../../../src/types/main";
import ImpactedUsers from "../../../src/components/ImpactedUsers/index";
import ImpactedPeople from "../../../src/components/ImpactedPeople";
import StatusBar from "../../../src/components/StatusBar";

interface ImpactedUser extends User {
  isExpert: boolean;
}

export default function updatedecision() {
  const [impactedUsers, setImpactedUsers] = useState<ImpactedUser[]>([]);

  const [decision, setDecision] = useState<TDecision>({
    benefits: "",
    context: "",
    createdAt: new Date(Date.now()),
    deadline: "",
    details: "",
    id: "",
    impact: "",
    risks: "",
    title: "",
    updatedAt: new Date(Date.now()),
    userId: "",
  });

  const { query, push } = useRouter();

  const getDecisions = async () => {
    const { data } = await axiosInstance.get(`/decisions/${query.id}`);
    setDecision(data);
  };

  useEffect(() => {
    if (query.id) {
      getDecisions();
    }
  }, [query]);

  if (!decision) return <div>Loading ...</div>;

  const handleSubmit = async () => {
    await axiosInstance.put(`/decisions/${query.id}`, {
      title: decision.title,
      details: decision.details,
      benefits: decision.benefits,
      risks: decision.risks,
      impact: decision.impact,
      context: decision.context,
      deadline: decision.deadline,
      decisionId: query.id,
      impactedUsers,
    });
    push(`/decision/${query.id}`);
  };

  const handleSubmitImpactedUsers = async () => {
    await axiosInstance.put(`/impactedusers`, {
      impactedUsers,
      decisionId: query.id,
    });
    push(`/decision/${query.id}/update`);
  };

  return (
    <div className="w-screen h-full flex flex-col justify-between">
      <Navbar />

      <div className="bg-[#70AF90] w-screen h-full">
        <h1 className="text-center my-7 text-3xl font-semibold text-[#0C3944]">
          Update Decision
        </h1>{" "}
        <div className="w-screen flex flex-col-reverse md:flex-row justify-start ">
          <div className="flex md:flex-col justify-start items-start p-5 space-y-3 ">
            <StatusBar />
            <ImpactedPeople />
          </div>

          <div className="w-full  px-4 md:w-3/4 ">
            <div className="flex flex-col">
              <label htmlFor="title" className="m-1 text-2xl font-semibold">
                <span className="text-[#0C3944] font-bold text-lg mt-4 m-1">
                  Title:{" "}
                </span>
                {decision.title}
              </label>
              <input
                type="text"
                placeholder="update title ..."
                id="title"
                name="title"
                className="text-black font-bold text-lg m-1 p-2 rounded-md "
                value={decision.title}
                onChange={(e) =>
                  setDecision((state) => ({
                    ...state,
                    title: e.target.value,
                  }))
                }
              />
            </div>
            <p className="text-[#0C3944] font-bold text-lg mt-4 m-1">
              Details :
            </p>

            <Editor
              name="details"
              value={decision.details}
              setValue={setDecision}
            />

            <p className="text-[#0C3944] font-bold text-lg m-1 mt-4">
              Benefits :
            </p>
            <Editor
              name="benefits"
              value={decision.benefits}
              setValue={setDecision}
            />

            <p className="text-[#0C3944] font-bold text-lg m-1 mt-4">Risks :</p>
            <Editor
              name="risks"
              value={decision.risks}
              setValue={setDecision}
            />

            <p className="text-[#0C3944] font-bold text-lg m-1 mt-4">
              Impact :
            </p>
            <Editor
              name="impact"
              value={decision.impact}
              setValue={setDecision}
            />

            <p className="text-[#0C3944] font-bold text-lg m-1 mt-4">
              Context:
            </p>
            <Editor
              name="context"
              value={decision.context}
              setValue={setDecision}
            />
            <label
              htmlFor="deadline"
              className="text-[#0C3944] font-bold text-lg flex flex-col mt-4 ml-1"
            >
              Update current deadline ({decision.deadline.substring(8, 10)}/
              {decision.deadline.substring(5, 7)}/
              {decision.deadline.substring(0, 4)})
              <input
                type="date"
                id="deadline"
                className="p-1 rounded-md"
                value={decision.deadline}
                onChange={(e) =>
                  setDecision((state) => ({
                    ...state,
                    deadline: new Date(e.target.value as string).toISOString(),
                  }))
                }
                name="deadline"
              />
            </label>
            <div className="flex flex-row justify-center">
              <button
                type="button"
                onClick={handleSubmit}
                className="min-w-[200px] w-32 h-15 py-2 mx-auto my-5 bg-[#E36164] rounded-2xl text-white"
              >
                Update
              </button>
            </div>

            <ImpactedUsers
              impactedUsers={impactedUsers}
              setImpactedUsers={setImpactedUsers}
            />
            <div className="flex flex-row justify-center">
              <button
                type="button"
                onClick={handleSubmitImpactedUsers}
                className="min-w-[200px] w-32 h-15 py-2 mx-auto mt-5 mb-10 bg-[#E36164] rounded-2xl text-white"
              >
                Update Impacted users
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
}
