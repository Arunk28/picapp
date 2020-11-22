import React,{Component} from "react";
import Search from "./Search";
import axios from'axios';
//lift the state from parent to  child
//because the react structure is 
//from parent to child passing

class App extends Component {
  state ={images : [] }
  // one way of doing by using async await http request call

   onSearchSubmit = async (term) => 
   {   
     const response = await axios.get('https://api.unsplash.com/search/',{
      params:{query : term},
      headers:{Authorization : 'Client-ID C2HzwDxiWbpi9zcYHhfHhh8ozGS2eQcVzGbiIKE5nRM'}
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
    Found images : {this.state.images.length}
    </div> );

  }
}
 


export default App;
