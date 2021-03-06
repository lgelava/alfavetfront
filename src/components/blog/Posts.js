import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getPostsHandler } from "../../redux/postActions";
import "./Posts.css";
import PostItem from "./PostItem";
import Pagination from "./Pagination";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getAllPosts")
      .then((res) => dispatch(getPostsHandler(res.data)));
  }, []);
  const posts = useSelector((state) => state.posts);
  // const currentPage = useSelector((state) => state.currentPage);
  // const indexOfLastPost = currentPage * 2;
  // const indexOfFirstPost = indexOfLastPost - 2;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      <div className="posts_outer">
        {posts.map((post) => (
          <PostItem post={post} key={post._id} />
        ))}
      </div>
      {/* <Pagination /> */}
    </>
  );
};

export default Posts;
