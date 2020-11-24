
import './ImageList.css';
import React from "react";
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map(({cover_photo}) => {
    return <ImageCard key={cover_photo.id} searchImages = {cover_photo} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
