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
            <div className="flex flex-row">
              <Link href="./statuspage">
                <button
                  type="button"
                  className="border-[#196C84]  text-[#196C84] text-xs  font-semibold w-48 h-6 rounded-[50px] m-2 border-solid border-2 bg-[rgb(225,239,242)] "
                >
                  status
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
