/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import { Dispatch, SetStateAction } from "react";
import { TDecisionState } from "../../pages/createdecision";
import "@uiw/react-markdown-preview/markdown.css";

const MarkDownEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <div>Loading ...</div>,
  }
);

interface IProps {
  value: string;
  setValue: Dispatch<SetStateAction<TDecisionState>>;
  name: keyof TDecisionState;
}

export default function Editor({ value, setValue, name }: IProps) {
  const handleChange = (newValue: string) => {
    setValue((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  return (
    <MarkDownEditor
      value={value}
      onChange={(val) => handleChange(val as string)}
    />
  );
}
