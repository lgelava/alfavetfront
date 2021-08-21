import React from "react";
import "../admin/Admin.css";
import AddArticle from "./addArticle/AddArticle";
import AdminArticles from "../admin/AdminArticles";
const BlogAdmin = () => {
  return (
    <div>
      <AddArticle />
      <AdminArticles />
    </div>
  );
};

export default BlogAdmin;
