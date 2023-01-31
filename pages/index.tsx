/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Card from "../src/components/Card";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import axiosInstance from "../util/axiosInstances";
import { IDecisionWithStatus, Status } from "../src/types/main";

type StatusKey = keyof typeof Status;
type StatusObject = {
  [K in StatusKey]: IDecisionWithStatus[];
};

export default function Home() {
  const [decisions, setDecisions] = useState<IDecisionWithStatus[]>([]);

  const getDecisions = async () => {
    const { data } = await axiosInstance.get(
      "/decisions?user=include&status=include"
    );
    setDecisions(data);
  };

  useEffect(() => {
    getDecisions();
  }, []);

  const decisionsByLastStatus = useMemo(() => {
    const decisionWithLastStatus = decisions.map((decision) => ({
      ...decision,
      lastStatus: decision.status
        .filter((s) => !!s.content)
        .sort((a, b) => {
          if (a.order < b.order) {
            return 1;
          }
          return -1;
        })[0],
    }));

    return decisionWithLastStatus.reduce(
      (acc, curr) => {
        const { lastStatus, ...decision } = curr;
        if (acc[curr.lastStatus!.name as keyof StatusObject]) {
          acc[curr.lastStatus!.name as keyof StatusObject].push(decision);
        } else {
          acc[curr.lastStatus!.name as keyof StatusObject] = [decision];
        }
        return acc;
      },
      {
        CONFLICTS: [],
        DEFINITIVE: [],
        FINAL: [],
        FIRST_DECISION: [],
        INITIAL: [],
        UNREACHED: [],
      } as StatusObject
    );
  }, [decisions]);

  return (
    <div>
      <Navbar />

      <div className="h-screen w-screen">
        <div className="flex flex-row justify-center ">
          <Link
            href="/createdecision"
            className="min-w-[200px] w-[5%] h-15 py-2 text-center bg-[#E36164] rounded-2xl text-white mt-4"
          >
            Create a decision
          </Link>
        </div>
        <h1 className="font-bold ml-2 text-lg">Decisions started</h1>
        <div className="bg-[#196C84]">
          <div className="flex flex-row overflow-x-scroll pt-2 pb-20 min-h-[20vh]">
            {decisionsByLastStatus.INITIAL.map((decision) => (
              <Card decision={decision} />
            ))}{" "}
          </div>
          <h1 className="font-bold text-white ml-2 text-lg">
            First decisions made
          </h1>
          <div className="flex flex-row overflow-x-scroll pt-2 pb-20 min-h-[20vh]">
            {decisionsByLastStatus.FIRST_DECISION.map((decision) => (
              <Card decision={decision} />
            ))}
          </div>
        </div>
        <h1 className="font-bold text-black ml-2 text-lg">
          Final decisions made
        </h1>
        <div className="flex flex-row overflow-x-scroll pt-2 pb-20 min-h-[20vh]">
          {decisionsByLastStatus.FINAL.map((decision) => (
            <Card decision={decision} />
          ))}
        </div>{" "}
        <h1 className="font-bold text-black ml-2 text-lg">All decisions</h1>
        <div className="flex flex-row overflow-x-scroll pt-2 pb-20 min-h-[20vh]  bg-[#196C84]">
          {decisionsByLastStatus.INITIAL.map((decision) => (
            <Card decision={decision} />
          ))}{" "}
          {decisionsByLastStatus.FIRST_DECISION.map((decision) => (
            <Card decision={decision} />
          ))}{" "}
          {decisionsByLastStatus.CONFLICTS.map((decision) => (
            <Card decision={decision} />
          ))}
          {decisionsByLastStatus.DEFINITIVE.map((decision) => (
            <Card decision={decision} />
          ))}
          {decisionsByLastStatus.UNREACHED.map((decision) => (
            <Card decision={decision} />
          ))}
          {decisionsByLastStatus.FINAL.map((decision) => (
            <Card decision={decision} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
