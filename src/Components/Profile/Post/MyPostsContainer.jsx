import React from "react";

import MyPost from './MyPost';
import { addPostCreator, onChangeAreaCreator } from "../../Redux/Profile-reducer";

const MyPostContainer = (props) => {


let profilePage = props.store.getState().profilePage.messageData
let NewPost = props.store.getState().profilePage.NewPostText
  let addPost = () => {
    props.store.dispatch(addPostCreator());
  };

  let onChangeArea = (text) => {
    let action = onChangeAreaCreator(text);
    props.store.dispatch(action);
  };
 

  
  return (<MyPost messageData={profilePage} updateNewPostText={onChangeArea} addPost={addPost} NewPost={NewPost}/>);
};

export default MyPostContainer;
