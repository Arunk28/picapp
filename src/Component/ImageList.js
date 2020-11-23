
import './ImageList.css';
import React from "react";
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map(({cover_photo}) => {
    return <ImageCard searchImages = {cover_photo} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
