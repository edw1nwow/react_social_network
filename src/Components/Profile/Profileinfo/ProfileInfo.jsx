import React from "react";
import Description from "./Description";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <img
        className={s.avatar}
        src="https://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg"
        alt=""
      />
      <Description />
    </div>
  );
};

export default ProfileInfo;
