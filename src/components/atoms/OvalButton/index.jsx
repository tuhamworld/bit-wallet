import React from "react";

const OvalButton = (props) => {
  return <button href={`#${props.url}`} className={`${props.type} oval-btn`}>{props.text}</button>;
};

export default OvalButton;
