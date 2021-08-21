import React, { useState, useRef } from "react";
import "./AdminArticles";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/postActions";
import Dropzone from "react-dropzone";
import { submitEditPost } from "../../redux/postActions";

const PostItemAdmin = ({ post }) => {
  const [editStatus, setEditStatus] = useState(false);
  const titleRef = useRef("");
  const contentRef = useRef("");

  var images = [];
  const [imageUrls, setImageUrls] = useState([]);
  const handleDrop = (files) => {
    // Push all the axios request promise into a single array
    const uploaders = files.map((file) => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "qekl35ef"); // Replace the preset name with your own
      formData.append("api_key", "873296287657589"); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios
        .post(
          "	https://api.cloudinary.com/v1_1/manji-gang/image/upload",
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }
        )
        .then((response) => {
          const data = response.data;
          const fileURL = data.secure_url; // You should store this URL for future references in your app
          images.push(fileURL);
        });
    });

    // Once all the files are uploaded
    axios.all(uploaders).then(() => {
      setImageUrls(images);
    });
  };

  const dispatch = useDispatch();
 
  
  const onPostDelete = (id) => {
    axios
      .delete(`http://localhost:3001/deletePost/${id}`)
      .then(() => {
        dispatch(deletePost(id));
      })
      .catch((e) => console.log("e", e));
  };
  const history = useHistory();

  const onPostEditSubmit = (id, title, text, images) => {
    if (titleRef.current.value) setEditStatus(false);

    axios
      .put(`http://localhost:3001/editPost/${id}`, {
        title: title,
        text: text,
        images: images,
      })
      .then(() => dispatch(submitEditPost(id, title, text, images)));
  };

  return (
    <>
      {!editStatus ? (
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
            <button onClick={() => onPostDelete(post._id)}>წაშლა</button>{" "}
            <span></span>{" "}
            {/* <button onClick={() => setEditStatus(true)}>რედაქტირება</button> */}
            <div className="title">
              <h3>{post.title}</h3>
            </div>
            <div className="text">
              <p>{post.text}</p>
            </div>
            <button onClick={() => history.push(`/postInner/${post._id}`)}>
              მეტი...
            </button>
          </div>
        </div>
      ) : (
        <div className="post_item">
          <form className="postForm">
            <div className="story">
              <input
                type="text"
                className="title"
                placeholder="სათაური"
                ref={titleRef}
                defaultValue={post.title || ""}
              />
              <textarea
                ref={contentRef}
                name="story"
                rows="10"
                className="story"
                placeholder="კონტენტი"
                defaultValue={post.text || ""}
              ></textarea>
            </div>
            <Dropzone onDrop={handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div className="drop_zone" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      სურათების შესაცვლელად დააჭირეთ აქ, ან ჩაყარეთ სურათები
                      პირდაპირ
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
            <div className="images_in_dropzone">
              {imageUrls.map((img) => {
                return (
                  <img
                    key={img}
                    style={{ marginTop: "30px" }}
                    src={img}
                    alt={post.title}
                  ></img>
                );
              })}
            </div>
            <button
              type="submit"
              onClick={onPostEditSubmit(
                post._id,
                titleRef.current.value,
                contentRef.current.value
              )}
              className="add_post_button"
            >
              შენახვა
            </button>
            <button
              onClick={() => setEditStatus(false)}
              className="add_post_button"
            >
              გაუქმება
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default PostItemAdmin;
