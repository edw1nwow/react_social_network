import React from "react";
import MyPostsContainer from "././Post/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./Profileinfo/ProfileInfo";

function Profile(props) {
  return (
    <div className={s.content}>
      <div className={s.background}>
        <img
          src='https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png'
          alt=''
        />
      </div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
}

export default Profile;
