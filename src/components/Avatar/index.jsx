import React from "react";
import "./style.css";
import AvatarImg from "../../assets/avatar/binh.jpg";

function Avatar() {
  return (
    <div className="avatar">
      <img src={AvatarImg} alt="" />
    </div>
  );
}

export default Avatar;
