import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import { TDecision } from "../../src/types/main";
import axiosInstance from "../../util/axiosInstances";
import Editor from "../../src/components/Editor";

export default function Details() {
  const [decision, setDecision] = useState<TDecision>();
  const [benefits, setBenefits] = useState(false);
  const [risks, setRisks] = useState(false);
  const [impact, setImpact] = useState(false);
  const [context, setContext] = useState(false);
  const [avis2, setAvis2] = useState(false);
  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  const [arrow3, setArrow3] = useState(false);
  const [arrow4, setArrow4] = useState(false);
  const [arrow5, setArrow5] = useState(false);

  const [avis, setAvis] = useState(false);

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
  const handleClick = () => {
    if (benefits) setBenefits(false);
    if (!benefits) setBenefits(true);
    if (arrow1) setArrow1(false);
    if (!arrow1) setArrow1(true);
  };

  const handleClick1 = () => {
    if (risks) setRisks(false);
    if (!risks) setRisks(true);
    if (arrow2) setArrow2(false);
    if (!arrow2) setArrow2(true);
  };

  const handleClick2 = () => {
    if (impact) setImpact(false);
    if (!impact) setImpact(true);
    if (arrow3) setArrow3(false);
    if (!arrow3) setArrow3(true);
  };

  const handleClick3 = () => {
    if (context) setContext(false);
    if (!context) setContext(true);
    if (arrow4) setArrow4(false);
    if (!arrow4) setArrow4(true);
  };

  const handleClick4 = () => {
    if (avis) setAvis(false);
    if (!avis) setAvis(true);
    if (arrow5) setArrow5(false);
    if (!arrow5) setArrow5(true);
  };

  const handleClick5 = () => {
    if (avis2) setAvis2(false);
    if (!avis2) setAvis2(true);
  };

  const handleSubmit = () => {};
  if (!decision) return <div>No decision</div>;

  return (
    <div className="flex flex-col w-full h-screen justify-between overflow-y-scroll">
      <Navbar />

      <div className="flex flex-col w-screen h-screen mx-auto bg-[#196C84] mt-3">
        <div
          id={decision.id}
          className="w-3/4 h-12 mx-auto bg-white rounded-md pl-1 mt-3"
        >
          {decision.title}
        </div>

        <div
          id="content"
          className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll mt-5 rounded-t-md pl-1"
        >
          <h1>DETAILS: {decision.details}</h1>
        </div>

        <div className="w-3/4 h-17 bg-white border-gray-200 border-y-2 pl-1 mx-auto">
          {" "}
          {!arrow1 ? (
            <button type="button" onClick={handleClick}>
              ▽ Benefits
            </button>
          ) : (
            <button type="button" onClick={handleClick}>
              △ Benefits
            </button>
          )}
        </div>
        {benefits && (
          <div
            id={decision.id}
            className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll  pl-1"
          >
            <h1>BENEFITS :{decision.benefits}</h1>
          </div>
        )}

        <div className="w-3/4 h-17  bg-white border-gray-200 border-y-2  pl-1 mx-auto">
          {" "}
          {!arrow2 ? (
            <button
              type="button"
              onClick={() => {
                handleClick1();
              }}
            >
              ▽ Risks
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                handleClick1();
              }}
            >
              △ Risks
            </button>
          )}
        </div>
        {risks && (
          <div
            id="content"
            className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll   pl-1"
          >
            <h1>RISKS: {decision.risks}</h1>
          </div>
        )}
        <div className="w-3/4 h-17 bg-white border-gray-200 border-y-2 pl-1 mx-auto">
          {" "}
          {!arrow3 ? (
            <button
              type="button"
              onClick={() => {
                handleClick2();
              }}
            >
              ▽ Impact
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                handleClick2();
              }}
            >
              △ Impact
            </button>
          )}
        </div>
        {impact && (
          <div
            id="content"
            className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll   pl-1"
          >
            <h1>IMPACT: {decision.impact}</h1>
          </div>
        )}
        <div className="w-3/4 h-17 bg-white border-gray-200 border-y-2 pl-1 mx-auto">
          {" "}
          {!arrow4 ? (
            <button
              type="button"
              onClick={() => {
                handleClick3();
              }}
            >
              ▽ Context
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                handleClick3();
              }}
            >
              △ Context
            </button>
          )}
        </div>
        {context && (
          <div
            id="content"
            className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll pl-1"
          >
            <h1>CONTEXT: {decision.context}</h1>
          </div>
        )}

        <div className="w-3/4 h-17 bg-white border-gray-200 border-y-2  pl-1 mx-auto">
          {" "}
          {!arrow5 ? (
            <button
              type="button"
              onClick={() => {
                handleClick4();
              }}
            >
              ▽ AVIS
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                handleClick4();
              }}
            >
              △ AVIS
            </button>
          )}
        </div>
        {avis && (
          <div
            id="content"
            className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll rounded-b-md pl-1"
          >
            <h1>Avis</h1>
          </div>
        )}
        <div className="w-3/4 h-17 bg-white border-gray-200 border-y-2 rounded-md pl-1 mx-auto">
          {" "}
        </div>
        <button
          type="button"
          onClick={handleClick5}
          className="min-w-[200px] w-10 h-15 py-2  mx-auto my-5 bg-[#E36164] rounded-2xl text-white"
        >
          Give your opinion
        </button>
        {avis2 && (
          <>
            <div
              id="avis2"
              className="w-3/4 h-1/4 bg-white mx-auto overflow-y-scroll pl-1"
            >
              <Editor />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="min-w-[200px] w-10 h-15 py-2  mx-auto my-5 bg-[#E36164] rounded-2xl text-white"
            >
              Send
            </button>
          </>
        )}
        <div
          id="deadline"
          className="w-3/4 h-12 mt-5 mx-auto bg-white mb-5 rounded-md pl-1"
        >
          <p>
            DEADLINE: {decision.deadline.substring(8, 10)}/
            {decision.deadline.substring(5, 7)}/
            {decision.deadline.substring(0, 4)}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
