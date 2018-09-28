import React from 'react';
import './Todo.css'

class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchKey: ''
        }
    }

    handleInput = (event)=>{
        this.setState({
            searchKey: event.target.value
        })
    }

    hideTask = (event)=>{
        event.preventDefault();
        this.props.hideTask(this.state.searchKey);
        this.setState({
            searchKey: ''
        })
    }

    showAll = (event)=>{
        event.preventDefault();
        this.props.showAll();
    }
    
    render(){
        return(
            <form className="search-form">
                <input className="search-input" onChange={this.handleInput} placeholder="find..." value={this.state.searchKey}/>
                <input className="button search-execute" type="submit" value="Find Todo" onClick={this.hideTask}/>
                <input className="button search-show-all" type="submit" value="Show All" onClick={this.showAll}/>
            </form>
        )
    }
}

export default SearchForm;