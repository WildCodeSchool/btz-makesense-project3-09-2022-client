import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axiosInstance from "../../util/axiosInstances";
import { TStatus } from "../types/main";
import Editor from "./Editor";
import EditorSkeletton from "./EditorSkeletton";

type Props = {
  name: string;
  status: TStatus;
};

export default function StatusForm({ name, status }: Props) {
  const [value, setValue] = useState({
    [status.name]: status.content || "",
  });

  const handleSubmit = async () => {
    await axiosInstance.put(`/status/${status.id}`, {
      content: value[status.name] || "",
    });
  };

  return (
    <div className="w-full">
      <p className="text-white font-semibold">{status.name}:</p>
      <Editor
        name={name}
        value={value[status.name] as string}
        setValue={setValue}
      />
      <button type="button" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
}
