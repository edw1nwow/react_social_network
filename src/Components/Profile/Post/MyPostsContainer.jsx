import MyPost from "./MyPost";
import {
  addPostCreator,
  onChangeAreaCreator,
} from "../../Redux/Profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messageData: state.profilePage.messageData,
    NewPost: state.profilePage.NewPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
        updateNewPostText: (text) => {
        dispatch(onChangeAreaCreator(text));
      },
      addPost: () => {
        dispatch(addPostCreator());
      },
    }
  
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
