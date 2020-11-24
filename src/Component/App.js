import React,{Component} from "react";
import Search from "./Search";
import axios from'axios';
import ImageList from "./ImageList";
import unsplash from './unsplash';
//lift the state from parent to  child
//because the react structure is 
//from parent to child passing

class App extends Component {
  state ={images : [] }
  // one way of doing by using async await http request call

   onSearchSubmit = async (term) => 
   {   
     const response = await unsplash.get('/search/',{
      params:{query : term}      
    });

    this.setState({images : response.data.collections.results});
    console.log( response.data.collections.results)

    //another way of doing by using then statement
    //  .then((response)=>{
    //   console.log(response.data)
    //  })        
  }

  render() { 
    return   (<div className="ui container" style={{marginTop:'10px'}}>
    <Search  onSearch ={this.onSearchSubmit}  />
    Total images : {this.state.images.length}
    <ImageList images ={this.state.images} />
    </div> );

  }
}
 


export default App;
