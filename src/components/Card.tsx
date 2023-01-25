import { useEffect, useState } from "react";
import Link from "next/link";
import { IDecisionWithStatus, TStatus } from "../types/main";
import axiosInstance from "../../util/axiosInstances";

type Props = {
  decision: IDecisionWithStatus;
};

export default function Card({ decision }: Props) {
  const [status, setStatus] = useState<TStatus[]>([]);

  const getStatus = async () => {
    const { data } = await axiosInstance.get(
      `/status?decisionId=${decision.id}`
    );

    setStatus(data);
  };

  useEffect(() => {
    getStatus();
  }, []);

  const lastStatus = status
    .filter((s) => !!s.content)
    .sort((a, b) => {
      if (a.order < b.order) {
        return 1;
      }
      return -1;
    })[0];

  console.log(status, lastStatus);

  return (
    <Link href={`/decision/${decision.id}`}>
      <div className=" mx-4 min-w-[250px] h-[170px]  rounded-[10px] p-1 border-2 border-x-gray-400 bg-white mb-3">
        <div>
          <div>
            <div className="flex flex-row">
              <Link href={`/status/${decision.id}`}>
                <button
                  type="button"
                  className="border-[#196C84]  text-[#196C84] text-xs  font-semibold w-48 h-6 rounded-[50px] m-2 border-solid border-2 bg-[rgb(225,239,242)] "
                >
                  {lastStatus?.name}
                </button>
              </Link>
              <button
                type="button"
                className="border-[#E36164] w-24 h-6 text-[#E36164] text-xs font-semibold rounded-[50px] m-2 border-solid border-2 bg-[rgb(245,229,239)] "
              >
                Hub France
              </button>
            </div>
          </div>
          <h1 className="font-bold">{decision.title}</h1>
          <div className="flex flex-row">
            <p className="mr-1">By </p>{" "}
            <p>
              {decision.user.firstName} {decision.user.lastName}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
