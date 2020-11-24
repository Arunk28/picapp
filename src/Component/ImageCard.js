import React, { Component } from 'react';

class ImageCard extends Component {
   constructor(props){
       super(props);
       this.imageRef = React.createRef();
   }
   state ={span : 0};
   //before load we cant access imag elemnent 
   //so we added event listenter attached to get the height of the element
   componentDidMount(){
       this.imageRef.current.addEventListener('load',this.setSpan);
   }
   setSpan = ()=>{
       const height =this.imageRef.current.clientHeight;
       const span = Math.ceil(height/10);
        this.setState({span});
   }
    render() { 
        const {id ,alt_description,urls }  = this.props.searchImages;
        return ( 
        <div style={{ gridRowEnd :  `span ${this.state.span}`}}>
            <img ref={this.imageRef} key={id} alt={alt_description} src={urls.regular}></img>  
        </div>
        );
    }
}
 
export default ImageCard;