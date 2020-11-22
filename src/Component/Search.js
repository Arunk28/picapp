
import React, { Component } from 'react';
class Search extends Component {
    state = { term : 'Hi theres'  }

    //method of event handler
    //if more than one line of code we can use function
    onInputChange =  (event)=>{
        console.log(event.target.value)
    }
    // 3 ways to do 
    //1 - this wont work so we are using arrow function
    onSearch = (e)=>{
        e.preventDefault();
        this.props.onSearch(this.state.term)
    }
    
    //2 - other way is 
    //{(e)=>{this.onSearch(e)}}
    
    //3 - contructor object
    
    render() { 
        return ( 
            <div className="ui segment">
        <form className="ui form" onSubmit={this.onSearch}>
            <div className="field">
                <label> Image Search</label>
                {/* <input type="text" onChange={this.onInputChange}></input> */}
                {/* <input type="text" onChange={(event)=>{console.log(event.target.value)}}></input> */}
                <input type="text" value={this.state.term} onChange={e=>{this.setState({term:e.target.value})}}></input>
            </div>
        </form>
        </div>); 
    }
}
 
export default Search;
 