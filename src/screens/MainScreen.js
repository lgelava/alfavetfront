import React from "react";
import hero_img from "../media/hero_img.png";
import Header from "../components/header/Header";
import Posts from "../components/blog/Posts";
import PostItem from "../components/blog/PostItem";
const MainScreen = () => {
  return (
    <>
      <Header />
      <div className="hero_content">
        <img
          className="hero_img"
          src={hero_img}
          alt="Veterinary Clinic Alpha / ვეტერინარული კლინიკა ალფა"
        />
      </div>
    </>
  );
};

export default MainScreen;
