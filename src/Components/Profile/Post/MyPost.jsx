import React from "react";
import Post from "./Post";
import { addPostCreator, onChangeAreaCreator } from "../../Redux/Profile-reducer";

const MyPost = (props) => {
  let add = React.createRef();
  let addPost = () => {
    props.store.dispatch(addPostCreator());
  };

  let onChangeArea = () => {
    let text = add.current.value;
    props.store.dispatch(onChangeAreaCreator(text));
  };
  let posts = props.store.getState().profilePage.messageData.map((p) => (<Post message={p.message} countLike={p.countLike} />));
  return (
    <div className='New-post'>
      <h3>New post</h3>
      <div>
        <textarea
          ref={add}
          value={props.store.getState().profilePage.NewPostText}
          onChange={onChangeArea}
        />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      {posts}
    </div>
  );
};

export default MyPost;
