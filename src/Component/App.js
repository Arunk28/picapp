import React,{Component} from "react";
import Search from "./Search";
import axios from'axios';
//lift the state from parent to  child
//because the react structure is 
//from parent to child passing
class App extends Component {

 onSearchSubmit(term){
   console.log(term);
   axios.get('https://api.unsplash.com/search/',{
     params:{query : term},
     headers:{Authorization : 'Client-ID C2HzwDxiWbpi9zcYHhfHhh8ozGS2eQcVzGbiIKE5nRM'}
   })
 }

  render() { 
    return   (<div className="ui container" style={{marginTop:'10px'}}>
    <Search  onSearch ={this.onSearchSubmit}  /></div> );
  }
}
 


export default App;
