
import './ImageList.css';
import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({cover_photo}) => {
    return <img key={cover_photo.id} alt={cover_photo.alt_description} src={cover_photo.urls.regular}></img>;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
