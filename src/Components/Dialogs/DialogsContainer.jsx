import { areaMessageCreator, addMessageCreator } from "../Redux/Dialog-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    send: (add) => {
      dispatch(addMessageCreator(add));
    },
    insertMessage: (add) => {
      dispatch(areaMessageCreator(add));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
