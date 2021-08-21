import React from 'react'
import "./Posts.css";
import Header from "../header/Header"
import hero_img from "../../media/heroBlog.png";
import Posts from "./Posts"

const Blog = () => {
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
      |<Posts />
      |</div>
    )
}

export default Blog
