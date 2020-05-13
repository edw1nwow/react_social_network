import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Message from "./message/Message";

const User = (props) => {
  debugger;
  let path = "/Dialogs/" + props.id;
  return (
    <NavLink to={path} className={`${s.user}`} activeClassName={s.active}>
      {props.name}
    </NavLink>
  );
};

const Dialogs = (props) => {
  let user = props.store
    .getState()
    .usersData.map((u) => <User name={u.name} id={u.id} />);

  let sendMessage = React.createRef();

  let send = () => {
    let add = sendMessage.current.value;
    props.store.addMessage(add);
  };

  let insertMessage = () => {
    let add = sendMessage.current.value;
    props.store.areaMessage(add);
  };

  return (
    <div className={s.dialogs}>
      {/* <h3>Dialogs</h3> */}
      <div className={s.users}>{user}</div>
      <div>
        {" "}
        <Message store={props.store} />
        <textarea
          ref={sendMessage}
          onChange={insertMessage}
          value={props.store.getState().sendMessage}
        />
        <button onClick={send}>send message</button>
      </div>
    </div>
  );
};
export default Dialogs;
