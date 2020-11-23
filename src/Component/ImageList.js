import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img src={image.cover_photo.urls.regular}></img>;
  });
  return <div>{images}</div>;
};

export default ImageList;
