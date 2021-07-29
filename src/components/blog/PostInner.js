import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Carousel from "react-material-ui-carousel";
import Header from "../../components/header/Header"
const PostInner = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3001/getSpecificPost/${id}`)
      .then((res) => setPost(res.data));
  }, []);

  return (
    <>
      <Header />
      <div className="inner_page">
        {(post.images && post.images.length !== 1) === true ? (
          <div className="img_container">
            <Carousel className="carousel">
              {post.images.map((item, i) => (
                <img className="img_in_carousel" src={item} key={i} alt={post.title} />
              ))}
            </Carousel>
          </div>
        ) : (post.images && post.images.length === 1) ? (
          <div className="img_container">
            <img src={post.images[0]} alt={post.title} />
          </div>
        ) :
          ""
        }
        <div className="inner_text">
          <h3>{post.title}</h3>
          <p>{post.text}</p>
        </div>
      </div>
    </>
  );
};

export default PostInner;
