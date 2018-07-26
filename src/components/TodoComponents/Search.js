import React from 'react'; 
import './Todo.css'; 


class Search extends React.Component {
    constructor(){
        super();
        this.state = {};  
    }


    render() {

        return <input className="search" type="text" placeholder="Search" value={this.props.value} onChange = {this.props.onChange}/>

    }
}



export default Search; 