import React, { useState } from "react";
import "./markDown.css";
import ReactMarkdown from "react-markdown";

export const MarkDown = () => {
  const [markDown, setMarkDown] = useState("#chinmay");
  return (
    <div className="container">
      <textarea
        className="left-side"
        value={markDown}
        onChange={(e) => setMarkDown(e.target.value)}
      ></textarea>
      <div className="right-side">
        <ReactMarkdown>{markDown}</ReactMarkdown>
      </div>
    </div>
  );
};
