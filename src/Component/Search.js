
import React, { Component } from 'react';
class Search extends Component {
    state = { term : 'Hi theres'  }

    //method of event handler
    //if more than one line of code we can use function
    onInputChange =  (event)=>{
        console.log(event.target.value)
    }

    render() { 
        return ( 
            <div className="ui segment">
        <form className="ui form">
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
 