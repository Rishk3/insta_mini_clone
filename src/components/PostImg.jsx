import React from "react";

export default function PostImg(props) {
  return (
    <div>
      <div className="gallery-item">
        <img
          style={{ maxHeight: "400px", objectFit: "contain" }}
          src={props.imgUrl}
          className="gallery-image"
          alt="Post Img"
        />
      </div>
    </div>
  );
}
