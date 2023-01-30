import { useRouter } from "next/router";
import { useState } from "react";
import axiosInstance from "../../util/axiosInstances";
import { TStatus } from "../types/main";
import Editor from "./Editor";

type Props = {
  name: string;
  status: TStatus;
};

export default function StatusForm({ name, status }: Props) {
  const { push } = useRouter();
  const [value, setValue] = useState({
    [status.name]: status.content || "",
  });

  const handleSubmit = async () => {
    await axiosInstance.put(`/status/${status.id}`, {
      content: value[status.name] || "",
    });
    push("/");
  };

  return (
    <div className="w-full">
      <p className="text-[#C1E94E] font-bold text-lg m-1">{status.name} :</p>
      <Editor
        name={name}
        value={value[status.name] as string}
        setValue={setValue}
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="min-w-[200px] w-32 h-15 py-2 my-2 bg-[#E36164] rounded-2xl text-white"
      >
        Update
      </button>
    </div>
  );
}
