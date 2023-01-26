import { ChangeEvent, useEffect, useState } from "react";
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
  const [users, setUsers] = useState<User[]>([]);
  const [input, setInput] = useState("");

  const getUsers = async () => {
    const { data } = await axiosInstance.get("/users");
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

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
  };

  const handleSubmitImpactedUsers = async () => {
    await axiosInstance.put(`/impactedusers`, {
      impactedUsers,
      decisionId: query.id,
    });
    push(`/decision/${query.id}/update`);
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-500">
      <Navbar />

      <div className=" flex flex-col   ">
        <div className="flex flex-col md:flex-row justify-start w-screen">
          <div className="flex md:flex-col justify-start items-start p-5 space-y-3 w-1/4 ">
            <StatusBar />
            <ImpactedPeople />
          </div>
          <div className="w-full px-4 md:w-3/4 ">
            <p className="text-[#C1E94E] font-bold text-lg m-1">
              {decision.title}
            </p>
            <p className="text-[#C1E94E] font-bold text-lg m-1">Details :</p>

            <Editor
              name="details"
              value={decision.details}
              setValue={setDecision}
            />

            <button
              type="button"
              onClick={handleSubmit}
              className="min-w-[200px] w-32 h-15 py-2 my-2 bg-[#E36164] rounded-2xl text-white"
            >
              Update
            </button>
            <p className="text-[#C1E94E] font-bold text-lg m-1">Benefits :</p>
            <Editor
              name="benefits"
              value={decision.benefits}
              setValue={setDecision}
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="min-w-[200px] w-32 h-15 py-2 my-2 bg-[#E36164] rounded-2xl text-white"
            >
              Update
            </button>
            <p className="text-[#C1E94E] font-bold text-lg m-1">Risks :</p>
            <Editor
              name="risks"
              value={decision.risks}
              setValue={setDecision}
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="min-w-[200px] w-32 h-15 py-2 my-2 bg-[#E36164] rounded-2xl text-white"
            >
              Update
            </button>
            <p className="text-[#C1E94E] font-bold text-lg m-1">Impact :</p>
            <Editor
              name="impact"
              value={decision.impact}
              setValue={setDecision}
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="min-w-[200px] w-32 h-15 py-2 my-2 bg-[#E36164] rounded-2xl text-white"
            >
              Update
            </button>
            <p className="text-[#C1E94E] font-bold text-lg m-1">Context:</p>
            <Editor
              name="context"
              value={decision.context}
              setValue={setDecision}
            />

            <button
              type="button"
              onClick={handleSubmit}
              className="min-w-[200px] w-32 h-15 py-2 my-2 bg-[#E36164] rounded-2xl text-white"
            >
              Update
            </button>

            <ImpactedUsers
              impactedUsers={impactedUsers}
              setImpactedUsers={setImpactedUsers}
            />
            <button
              type="button"
              onClick={handleSubmitImpactedUsers}
              className="min-w-[200px] w-32 h-15 py-2 my-2 bg-[#E36164] rounded-2xl text-white"
            >
              Update
            </button>
            <label
              htmlFor="deadline"
              className="text-[#C1E94E] font-bold text-lg flex flex-col"
            >
              Update current deadline ({decision.deadline.substring(8, 10)}/
              {decision.deadline.substring(5, 7)}/
              {decision.deadline.substring(0, 4)})
              <input
                type="date"
                id="deadline"
                className="p-1"
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
            <button
              type="button"
              onClick={handleSubmit}
              className="min-w-[200px] w-32 h-15 py-2 my-2 bg-[#E36164] rounded-2xl text-white"
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
