import React from "react";
import Post from "./Post";

const MyPost = (props) => {
  let add = React.createRef();

  let onAddPost = () => {
  
    props.addPost();
  };

  let onChangeArea = () => {

    let text = add.current.value;
    props.updateNewPostText(text);
  };
 
  let posts = props.messageData.map((p) => (
    <Post message={p.message} countLike={p.countLike} />
  ));

  return (
    <div className='New-post'>
      <h3>New post</h3>
      <div>
        <textarea ref={add} value={props.NewPost} onChange={onChangeArea} />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      {posts}
    </div>
  );
};

export default MyPost;
