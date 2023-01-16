/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const MarkDownEditorView = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default.Markdown),
  {
    ssr: false,
    loading: () => <div>Loading ...</div>,
  }
);

type Props = {
  value: string;
};

export default function PreviewMarkdown({ value }: Props) {
  return <MarkDownEditorView className="" source={value} />;
}
