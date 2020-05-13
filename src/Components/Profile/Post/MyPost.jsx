import React from "react";
import Post from "./Post";

const MyPost = (props) => {
  let add = React.createRef();
  debugger;
  let addPost = () => {
    props.store.addPost(props.store.getState().NewPostText);
  };

  let onChangeArea = () => {
    let text = add.current.value;
    props.store.areaPost(text);
  };

  let posts = props.store
    .getState()
    .messageData.map((p) => (
      <Post message={p.message} countLike={p.countLike} />
    ));

  console.log(props.store.getState().messageData);
  return (
    <div className='New-post'>
      <h3>New post</h3>
      <div>
        <textarea
          ref={add}
          value={props.store.getState().NewPostText}
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