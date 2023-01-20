import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import { IDecisionWithStatus } from "../../src/types/main";
import axiosInstance from "../../util/axiosInstances";
import Editor from "../../src/components/Editor";
import StatusBar from "../../src/components/StatusBar";
import ImpactedPeople from "../../src/components/ImpactedPeople";
import PreviewMarkdown from "../../src/components/PreviewMarkdown";
import UpdateDecisions from "../../src/components/UpdateDecisions";

type TCommentary = {
  id: string;
  content: string;
  createdAt: string;
  decisionId: string;
};

type TNewCommentary = {
  content: "";
  decisionId: "";
};

export default function Details() {
  const [decision, setDecision] = useState<IDecisionWithStatus>();
  const [commentaries, setCommentaries] = useState<TCommentary[]>([]);
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
  const [arrow6, setArrow6] = useState(false);
  const [details, setDetails] = useState(false);
  const [commentary, setCommentary] = useState<TNewCommentary>({
    content: "",
    decisionId: "",
  });
  const { query } = useRouter();

  const [avis, setAvis] = useState(false);

  const getCommentaries = async () => {
    const { data } = await axiosInstance.get(
      `/commentaries?decisionId=${query.id}`
    );
    setCommentaries(data);
  };
  const getDecisionWithStatus = async () => {
    const { data } = await axiosInstance.get(
      `/decisions/${query.id}?status=include`
    );
    setDecision(data);
  };

  useEffect(() => {
    if (query.id) {
      getCommentaries();
      getDecisionWithStatus();
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

  const handleClick7 = () => {
    if (details) setDetails(false);
    if (!details) setDetails(true);
    if (arrow6) setArrow6(false);
    if (!arrow6) setArrow6(true);
  };

  const handleSubmit = async () => {
    await axiosInstance.post("/commentaries", {
      content: commentary.content,
      decisionId: query.id,
    });
  };

  const lastStatus = decision?.status
    .filter((s) => !!s.content)
    .sort((a, b) => {
      if (a.order < b.order) {
        return 1;
      }
      return -1;
    })[0];

  if (!decision) return <div>No decision</div>;

  return (
    <div className="flex flex-col w-full h-screen justify-between ">
      <Navbar />
      <div className="flex flex-col-reverse  md:flex-row-reverse ">
        <div className="flex md:flex-col justify-start items-start p-5 space-y-3 ">
          <StatusBar />
          <ImpactedPeople />
        </div>
        <div className="overflow-y-scroll flex flex-col w-screen h-screen  bg-[#196C84] mt-3">
          <div
            id={decision.id}
            className="w-3/4 h-30  mx-auto flex flex-col bg-white  pl-1 "
          >
            <div className="flex flex-row">
              <button
                type="button"
                className="border-[#196C84]  text-[#196C84] text-xs  font-semibold w-40 h-6 rounded-[50px] m-2 border-solid border-2 bg-[rgb(225,239,242)]  "
              >
                {lastStatus!.name}
              </button>
              <button
                type="button"
                className="border-[#E36164] w-24 h-6 text-[#E36164] text-xs font-semibold rounded-[50px] m-2 border-solid border-2 bg-[rgb(245,229,239)] "
              >
                Hub France
              </button>
            </div>
            <h1 className="font-semibold text-2xl">{decision.title}</h1>
            <div>
              <p className="text-xs">
                By <span className="font-bold">user</span>
              </p>
            </div>
          </div>

          <div className="w-3/4 h-10 font-bold bg-white border-gray-200 border-y-2 pl-1 mx-auto">
            {!arrow6 ? (
              <button type="button" onClick={handleClick7}>
                ▽ Details
              </button>
            ) : (
              <button type="button" onClick={handleClick7}>
                △ Details
              </button>
            )}
          </div>
          {details && (
            <div
              id={decision.id}
              className="w-3/4 min-h-[500px] bg-gray-100 mx-auto overflow-y-scroll  pl-1"
            >
              <h1>Details :</h1>
              <PreviewMarkdown value={decision.details} />
            </div>
          )}

          <div className="w-3/4 h-10 font-bold bg-white border-gray-200 border-y-2 pl-1 mx-auto">
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
              className="w-3/4 min-h-[200px] bg-gray-100  mx-auto overflow-y-scroll  pl-1"
            >
              <h1>BENEFITS :</h1>
              <PreviewMarkdown value={decision.benefits} />
            </div>
          )}

          <div className="w-3/4 h-10 font-bold  bg-white border-gray-200 border-y-2  pl-1 mx-auto">
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
              className="w-3/4 min-h-[200px] bg-gray-100  mx-auto overflow-y-scroll   pl-1"
            >
              <h1>RISKS: {decision.risks}</h1>
              <PreviewMarkdown value={decision.risks} />
            </div>
          )}
          <div className="w-3/4 h-10 font-bold bg-white border-gray-200 border-y-2 pl-1 mx-auto">
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
              className="w-3/4 min-h-[200px] bg-gray-100  mx-auto overflow-y-scroll   pl-1"
            >
              <h1>IMPACT: </h1>
              <PreviewMarkdown value={decision.impact} />
            </div>
          )}
          <div className="w-3/4 h-10 font-bold bg-white border-gray-200 border-y-2 pl-1 mx-auto">
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
              className="w-3/4 min-h-[200px] bg-gray-100  mx-auto overflow-y-scroll pl-1"
            >
              <h1>CONTEXT: </h1>
              <PreviewMarkdown value={decision.context} />
            </div>
          )}

          <div className="w-3/4 h-10 font-bold bg-white border-gray-200 border-y-2  pl-1 mx-auto">
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
              className="w-3/4 min-h-[200px] bg-gray-100  mx-auto overflow-y-scroll  pl-1"
            >
              {commentaries.map((e) => (
                <PreviewMarkdown value={e.content} />
              ))}
            </div>
          )}
          <UpdateDecisions />

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
                className="w-3/4 min-h-[200px] bg-gray-100  mx-auto overflow-y-scroll pl-1"
              >
                <Editor
                  name="content"
                  value={commentary.content}
                  setValue={setCommentary}
                />
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
      </div>
      <Footer />
    </div>
  );
}
