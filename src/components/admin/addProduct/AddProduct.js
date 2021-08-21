import React, { useRef, useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/productActions";

import "./AddProduct.css";

const AddProduct = () => {
  const dispatch = useDispatch();

  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef(0);

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

  const onProductSubmit = () => {
    if (titleRef.current.value !== "") {
      onAdd(
        titleRef.current.value,
        descriptionRef.current.value,
        imageUrls,
        priceRef.current.value
      );
      alert("პროდუქტი წარმატებით დაემატა");
      window.location.reload();
    } else {
      alert("დასახელება აუცილებელია");
    }
  };

  const onAdd = (title, text, images, price) => {
    axios
      .post("http://localhost:3001/addNewProduct", {
        title,
        text,
        images,
        price,
      })
      .then((res) => {
        dispatch(addProduct(res.data));
      })
      .catch((e) => console.log("e", e));
  };

  return (
    <div>
      <form className="productForm">
        <div className="product">
          <input
            type="text"
            className="title"
            placeholder="სათაური"
            ref={titleRef}
          />

          <input
            type="number"
            ref={priceRef}
            name="price"
            className="price"
            placeholder="ფასი"
          />
          <textarea
            type="text"
            ref={descriptionRef}
            name="description"
            className="description"
            placeholder="აღწერა"
          />
        </div>
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div className="drop_zone" {...getRootProps()}>
                <input {...getInputProps()} />
                <p>სურათები ჩაყარეთ აქ ან დააჭირეთ ასატვირთად</p>
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
                alt={titleRef.current.value}
              ></img>
            );
          })}
        </div>
        <button onClick={onProductSubmit} className="add_post_button">
          გამოქვეყნება
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
