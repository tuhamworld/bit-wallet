import React from "react";
import "./index.scss";

const OvalButton = (props) => {
  return <div className={`${props.type} oval-btn`}>{props.text}</div>;
};

export default OvalButton;
