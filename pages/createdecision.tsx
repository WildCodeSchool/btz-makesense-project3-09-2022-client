/* eslint-disable import/no-cycle */
import { ChangeEvent, useState } from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { ImpactedUser } from "../src/types/main";
import ImpactedUsers from "../src/components/ImpactedUsers";
import Editor from "../src/components/Editor";
import axiosInstance from "../util/axiosInstances";

export type TDecisionState = {
  title: string;
  benefits: string;
  details: string;
  risks: string;
  impact: string;
  context: string;
  deadline: string;
};

const defaultDecisionState = {
  title: "",
  benefits: "",
  details: "",
  risks: "",
  impact: "",
  context: "",
  deadline: "",
};

export default function createDecision() {
  const [impactedUsers, setImpactedUsers] = useState<ImpactedUser[]>([]);

  const [decisionState, setDecisionState] =
    useState<TDecisionState>(defaultDecisionState);

  const handleSubmit = () => {
    axiosInstance
      .post("/decisions", {
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

      <div className="bg-[#70AF90] w-screen h-full">
        <h1 className=" text-center my-7 text-3xl font-semibold text-[#0C3944]">
          Create a decision
        </h1>
        <form className="w-[85%] flex flex-col m-auto h-full space-y-10 mt-4 mb-4 md:w-[70%]">
          <label
            htmlFor="title"
            className="text-[#0C3944] font-bold text-lg mt-4 m-1"
          >
            Title:
            <input
              name="title"
              onChange={handleChange}
              type="text"
              className=" w-full h-[50px] m-auto rounded-md p-3"
              placeholder="Your title ..."
              value={decisionState.title}
            />
          </label>
          <div className="container">
            <p className="text-[#0C3944] font-bold text-lg mt-4 m-1">
              Content:
            </p>
            <Editor
              name="details"
              value={decisionState.details}
              setValue={setDecisionState}
            />
          </div>

          <div className="container">
            <p className="text-[#0C3944] font-bold text-lg mt-4 m-1">
              Impact on organisation:
            </p>
            <Editor
              name="impact"
              value={decisionState.impact}
              setValue={setDecisionState}
            />
          </div>
          <div className="container">
            <p className="text-[#0C3944] font-bold text-lg mt-4 m-1">
              Context around decision:
            </p>
            <Editor
              name="context"
              value={decisionState.context}
              setValue={setDecisionState}
            />
          </div>
          <div className="container">
            <p className="text-[#0C3944] font-bold text-lg mt-4 m-1">Risks:</p>
            <Editor
              name="risks"
              value={decisionState.risks}
              setValue={setDecisionState}
            />
          </div>
          <div className="container">
            <p className="text-[#0C3944] font-bold text-lg mt-4 m-1">
              Benefits:
            </p>
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
          <label
            htmlFor="deadline"
            className="text-[#0C3944] font-bold text-lg mt-4 m-1"
          >
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
            className="min-w-[200px] w-32 h-15 py-2 mx-auto my-10 bg-[#E36164] rounded-2xl text-white"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
