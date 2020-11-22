import React,{Component} from "react";
import Search from "./Search";

class App extends Component {

 onSearchSubmit(term){
   console.log(term);
 }
 
  render() { 
    return   (<div className="ui container" style={{marginTop:'10px'}}>
    <Search /></div> );
  }
}
 


export default App;
