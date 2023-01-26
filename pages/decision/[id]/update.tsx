import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../../src/components/Navbar";
import Footer from "../../../src/components/Footer";
import axiosInstance from "../../../util/axiosInstances";
import Editor from "../../../src/components/Editor";
import { TDecision } from "../../../src/types/main";

export default function updatedecision() {
  const [decision, setDecision] = useState<TDecision | null>(null);

  const { query } = useRouter();

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
    });
  };

  return (
    <div className="w-screen h-full flex flex-col bg-gray-500">
      <Navbar />

      <div className=" flex flex-col mx-48  ">
        <p className="text-[#C1E94E] font-bold text-lg m-1">{decision.title}</p>
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
        <Editor name="risks" value={decision.risks} setValue={setDecision} />
        <button
          type="button"
          onClick={handleSubmit}
          className="min-w-[200px] w-32 h-15 py-2 my-2 bg-[#E36164] rounded-2xl text-white"
        >
          Update
        </button>
        <p className="text-[#C1E94E] font-bold text-lg m-1">Impact :</p>
        <Editor name="impact" value={decision.impact} setValue={setDecision} />
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
              setDecision((prevState) => ({
                ...prevState,
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

      <Footer />
    </div>
  );
}
