import React from "react";

const Button = (props) => {
  return <div className={`${props.action} btn`}>{ props.text}</div>;
};

export default Button;