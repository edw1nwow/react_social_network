import React from "react";
import s from "./Message.module.css";

const Letter = (props) => {
  return <div className={s.messages}>{props.message}</div>;
};

const Message = (props) => {
debugger
  let m = props.dialogPage
    .letterData.map((m) => <Letter message={m.message} />);

  return <div className={s.s}>{m}</div>;
};

export default Message;
