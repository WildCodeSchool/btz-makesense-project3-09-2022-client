import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { TStatus } from "../types/main";
import axiosInstance from "../../util/axiosInstances";

export default function StatusBar() {
  const { query } = useRouter();

  const [status, setStatus] = useState<TStatus[]>([]);

  useEffect(() => {
    const getUpdatedStatus = async () => {
      const { data } = await axiosInstance.get(
        `/decisions/${query.id || query.decisionId}?status=include`
      );
      setStatus(data.status);
    };
    if (query.id || query.decisionId) {
      getUpdatedStatus();
    }
  }, [query]);

  return (
    <div className=" mr-10 space-y-5  w-full mb-5">
      <h1 className="font-semibold">Status</h1>

      <div className="flex flex-col justify-between space-y-5 border-l-[5px] rounded border-solid border-[rgb(181,230,60)]">
        {status

          .sort((a, b) => {
            if (a.order > b.order) {
              return 1;
            }
            return -1;
          })

          .map((s) => (
            <p className="flex flex-row">
              <span className="text-green-300 ">-</span>
              {s.name}
            </p>
          ))}
      </div>
    </div>
  );
}
