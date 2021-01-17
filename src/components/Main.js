import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Loader from "./Loader/Loader";
import UnsplashImages from "./UnsplashImages/UnsplashImages";

import axios from "axios";

const Main = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";

    axios
      .get(
        '${apiRoot}/photos/?client_id=7ZrsYgkf8ypuMqlgROdVilwGdVSj2SrYMHR2ozgWWmE'
      )
      .then((res) => console.log(res.data));
  });
  return (
    <div>
      <Header />
      <Loader />
      <UnsplashImages />
    </div>
  );
};

export default Main;
