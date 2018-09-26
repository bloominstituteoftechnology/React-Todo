import React from 'react';
import './Todo.css'

class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.taskInputRef = React.createRef();
        this.state = {
            task: ''
        }
    }

    handleInput = (event)=>{
        this.setState({
            task: event.target.value
        })
    }

    handleAddTodo = (event)=>{
        event.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: ''
        })
        this.taskInputRef.current.value = '';
    }

    handleClearCompleted = (event)=>{
        event.preventDefault();
        this.props.clearCompleted();
    }
    
    render(){
        return(
            <form className="search-form">
                <input className="search-input" onChange={this.handleInput} placeholder="find..." ref={this.taskInputRef}/>
                <input className="search-execute" type="submit" value="Add Todo" onClick={this.handleAddTodo}/>
            </form>
        )
    }
}

export default SearchForm;