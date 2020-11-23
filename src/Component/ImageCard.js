import React, { Component } from 'react';

class ImageCard extends Component {
   
    render() { 
        const {id ,alt_description,urls }  = this.props.searchImages;
        return ( <img key={id} alt={alt_description} src={urls.regular}></img>  );
    }
}
 
export default ImageCard;