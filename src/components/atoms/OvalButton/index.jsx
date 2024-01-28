import React from "react";
import "./index.scss";

const OvalButton = (props) => {
  return <a href={`#${props.url}`} className={`${props.type} oval-btn`}>{props.text}</a>;
};

export default OvalButton;
