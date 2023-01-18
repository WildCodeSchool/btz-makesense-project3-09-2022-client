import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../util/axiosInstances";
import { TStatus } from "../types/main";
import PreviewMarkdown from "./PreviewMarkdown";

function StatusDetails({ status }: { status: TStatus }) {
  const [arrow7, setArrow7] = useState(false);

  const handleClick8 = () => {
    setArrow7((state) => !state);
  };

  return (
    <div>
      <div className="w-3/4 min-w-[200px] font-bold bg-white border-gray-200 border-y-2 pl-1 mx-auto">
        {!arrow7 ? (
          <button type="button" onClick={handleClick8}>
            ▽ {status.name}
          </button>
        ) : (
          <button type="button" onClick={handleClick8}>
            △ {status.name}
          </button>
        )}
      </div>
      {arrow7 && (
        <div
          id={status.id}
          className="w-3/4 min-h-[500px] bg-gray-100 mx-auto overflow-y-scroll pl-1"
        >
          <PreviewMarkdown value={status.content} />
        </div>
      )}
    </div>
  );
}

export default function UpdateDecisions() {
  const { query } = useRouter();
  const [status, setStatus] = useState<TStatus[]>([]);

  useEffect(() => {
    const getUpdatedStatus = async () => {
      const { data } = await axiosInstance.get(
        `/decisions/${query.id}?status=include`
      );
      setStatus(data.status);
    };
    if (query.id) {
      getUpdatedStatus();
    }
  }, [query]);

  return (
    <div className="flex flex-col">
      {status
        .sort((a, b) => {
          if (a.order > b.order) {
            return 1;
          }
          return -1;
        })
        .map((s) => (
          <StatusDetails status={s} />
        ))}
    </div>
  );
}
