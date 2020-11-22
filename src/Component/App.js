import React,{Component} from "react";
import Search from "./Search";

//lift the state from parent to  child
//because the react structure is 
//from parent to child passing
class App extends Component {

 onSearchSubmit(term){
   console.log(term);
 }

  render() { 
    return   (<div className="ui container" style={{marginTop:'10px'}}>
    <Search  onSearch ={this.onSearchSubmit}  /></div> );
  }
}
 


export default App;
