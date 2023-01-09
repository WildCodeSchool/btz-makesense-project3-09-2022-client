import Link from "next/link";
import { IDecisiontWithUser } from "../types/main";

type Props = {
  decision: IDecisiontWithUser;
};

export default function Card({ decision }: Props) {
  return (
    <Link href={`/decision/${decision.id}`}>
      <div className=" mx-4 min-w-[250px] h-[170px]  rounded-[10px] p-1 border-2 border-x-gray-400 bg-white">
        <div>
          <div>
            <button
              type="button"
              className="border-[#267a50] w-20 h-6 rounded-lg m-2 border-solid border-2 bg-[#70AF90] opacity-80"
            >
              status
            </button>
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
