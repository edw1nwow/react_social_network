import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <img
        className={s.avatar}
        src='https://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg'
        alt=''
      />
      <p>{props.message}</p>
      <div>
        <span>like </span> <span>{props.countLike}</span>
      </div>
    </div>
  );
};
export default Post;
