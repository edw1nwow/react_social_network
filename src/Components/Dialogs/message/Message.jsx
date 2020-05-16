import React from "react";
import s from "./Message.module.css";

const Letter = (props) => {
  return <div className={s.messages}>{props.message}</div>;
};

const Message = (props) => {
  let m = props.store
    .getState().dialogPage
    .letterData.map((m) => <Letter message={m.message} />);

  return <div className={s.s}>{m}</div>;
};

export default Message;
