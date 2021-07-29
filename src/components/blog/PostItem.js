import React from "react";
import "./Posts.css";
import { Link, useHistory } from "react-router-dom";

const PostItem = ({ post }) => {
  const history = useHistory();
  return (
    <div className="post_item">
      <div className="post_images_div">

        <img
          className="main_post_img"
          onClick={() => history.push(`/postInner/${post._id}`)}
          src={post.images[0]}
          alt={post.title}
        ></img>


      </div>
      <div className="title_and_text">
        <div className="title">
          <h3>{post.title}</h3>
        </div>
        <div className="text">
          <p>{post.text}</p>
        </div>
        <button onClick={() => history.push(`/postInner/${post._id}`)}>მეტი...</button>
      </div>
    </div>
  );
};

export default PostItem;
