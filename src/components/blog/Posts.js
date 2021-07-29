import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getPostsHandler } from "../../redux/postActions";
import "./Posts.css";
import PostItem from "./PostItem";
import Header from "../header/Header";
import hero_img from "../../media/heroBlog.png";

const Posts = () => {
  const dispatch = useDispatch();
  const [componentDisplay, setComponentDisplay] = useState(false)
  useEffect(() => {
    axios
      .get("http://localhost:3001/getAllPosts")
      .then((res) => dispatch(getPostsHandler(res.data)));
    setComponentDisplay(true)
  }, []);
  const posts = useSelector((state) => state.posts);

  return (
    <div className="blog">
      <Header />
      <div className="hero_content">
        <img
          className="hero_img"
          src={hero_img} style={{ marginTop: '46px', width: '100%' }}
          alt="Veterinary Clinic Alpha / ვეტერინარული კლინიკა ალფა"
        />
      </div>
      <div className="posts_outer">
        {posts.map((post) => (
          <PostItem post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
