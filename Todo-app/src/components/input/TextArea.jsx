import React from "react";
import "./Input.css";

const TextArea = (props) => {
  return <textarea className="primary-input textarea" rows="3" {...props} />;
};

export default TextArea;
