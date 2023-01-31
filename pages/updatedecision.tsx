import { ChangeEvent, useState } from "react";

import { useRouter } from "next/router";
import Footer from "../src/components/Footer";
import ImpactedUsers, { ImpactedUser } from "../src/components/ImpactedUsers";
import Editor from "../src/components/Editor";
import axiosInstance from "../util/axiosInstances";
import Navbar from "../src/components/Navbar";
import { TDecisionState } from "./createdecision";

const defaultDecisionState = {
  title: "",
  benefits: "",
  details: "",
  risks: "",
  impact: "",
  context: "",
  deadline: "",
};

export default function updatedecision() {
  const { query } = useRouter();
  const [impactedUsers, setImpactedUsers] = useState<ImpactedUser[]>([]);

  const [decisionState, setDecisionState] =
    useState<TDecisionState>(defaultDecisionState);

  const handleSubmit = () => {
    axiosInstance
      .put(`/decisions/${query.decisionId}`, {
        title: decisionState.title,
        benefits: decisionState.benefits,
        risks: decisionState.risks,
        impact: decisionState.impact,
        details: decisionState.details,
        context: decisionState.context,
        deadline: decisionState.deadline,
        impactedUsers,
      })
      .then(() => {
        setDecisionState(defaultDecisionState);
        setImpactedUsers([]);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDecisionState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState<string | undefined>("**Hello world!!!**");

  return (
    <div className="w-screen h-full flex flex-col justify-between">
      <Navbar />

      <input type="text" />
      <div className="bg-[#24673A] w-screen h-full">
        <form className="w-[60%] flex flex-col m-auto h-full space-y-10 mt-4 mb-4 md:w-[50%]">
          <input
            name="title"
            onChange={handleChange}
            type="text"
            className=" w-full h-[50px] m-auto rounded-md p-3"
            placeholder="Title"
            value={decisionState.title}
          />
          <div className="container">
            <p className="text-white font-semibold">Content:</p>
            <Editor
              name="details"
              value={decisionState.details}
              setValue={setDecisionState}
            />
          </div>

          <div className="container">
            <p className="text-white font-semibold">Impact on organisation:</p>
            <Editor
              name="impact"
              value={decisionState.impact}
              setValue={setDecisionState}
            />
          </div>
          <div className="container">
            <p className="text-white font-semibold">Context around decision:</p>
            <Editor
              name="context"
              value={decisionState.context}
              setValue={setDecisionState}
            />
          </div>
          <div className="container">
            <p className="text-white font-semibold">Risks:</p>
            <Editor
              name="risks"
              value={decisionState.risks}
              setValue={setDecisionState}
            />
          </div>
          <div className="container">
            <p className="text-white font-semibold">Benefits:</p>
            <Editor
              name="benefits"
              value={decisionState.benefits}
              setValue={setDecisionState}
            />
          </div>
          <ImpactedUsers
            impactedUsers={impactedUsers}
            setImpactedUsers={setImpactedUsers}
          />
          <label htmlFor="deadline" className="text-white font-medium">
            Deadline:
            <input
              value={decisionState.deadline}
              type="date"
              id="deadline"
              onChange={(e) =>
                setDecisionState((prevState) => ({
                  ...prevState,
                  deadline: e.target.value,
                }))
              }
              className=" w-full h-[50px] m-auto text-black rounded-md p-3"
            />
          </label>

          <button
            onClick={handleSubmit}
            type="button"
            className="min-w-[200px] w-full h-15 py-2  bg-[#E36164] rounded-2xl text-white"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
