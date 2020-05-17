import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Message from "./message/Message";


const User = (props) => {
  let path = "/Dialogs/" + props.id;
  return (
    <NavLink to={path} className={`${s.user}`} activeClassName={s.active}>
      {props.name}
    </NavLink>
  );
};





const Dialogs = (props) => {
  let user = props.dialogPage.usersData.map((u) => <User name={u.name} id={u.id} />);

  let sendMessage = React.createRef();

  let onSend = () => {
    let add = sendMessage.current.value;
    props.send(add)
  };

  let onInsertMessage = () => {
    let add = sendMessage.current.value;
    props.insertMessage(add)
  };

  return (
    <div className={s.dialogs}>
      {/* <h3>Dialogs</h3> */}
      <div className={s.users}>{user}</div>
      <div>
        {" "}
        <Message dialogPage={props.dialogPage} />
        <textarea
          ref={sendMessage}
          onChange={onInsertMessage}
          value={props.dialogPage.sendMessage}
        />
        <button onClick={onSend}>send message</button>
      </div>
    </div>
  );
};
export default Dialogs;
