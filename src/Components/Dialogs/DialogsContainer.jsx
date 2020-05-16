import React from "react";
import { areaMessageCreator, addMessageCreator } from "../Redux/Dialog-reducer";
import Dialogs from './Dialogs';





const DialogsContainer = (props) => {

  let dialogPage = props.store.getState().dialogPage
  

  let send = (add) => {
    props.store.dispatch(addMessageCreator(add));
  };

  let insertMessage = (add) => {

    props.store.dispatch(areaMessageCreator(add));
  };

  return (
  <Dialogs send={send} dialogPage={dialogPage} insertMessage={insertMessage} />
  );
};
export default DialogsContainer;
