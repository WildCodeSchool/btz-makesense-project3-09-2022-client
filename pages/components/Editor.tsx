/* eslint-disable import/no-extraneous-dependencies */
import dynamic from "next/dynamic";
import { useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MarkDownEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <div>Loading ...</div>,
  }
);

export default function Editor() {
  const [value, setValue] = useState("Type your text here");
  return (
    <MarkDownEditor value={value} onChange={(val) => setValue(val as string)} />
  );
}
