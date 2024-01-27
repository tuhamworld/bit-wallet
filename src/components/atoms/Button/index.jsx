import React from "react";
import "./index.scss";

const Button = (props) => {
  return <div className={`${props.action} btn`}>{ props.text}</div>;
};

export default Button;