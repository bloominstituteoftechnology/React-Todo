import React from 'react';
import './Todo.css'

class TodoForm extends React.Component{
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
            <form className="todo-form">
                <input className="todo-input" onChange={this.handleInput} placeholder="...todo" ref={this.taskInputRef}/>
                <div>
                    <input className="button todo-add" type="submit" value="Add Todo" onClick={this.handleAddTodo}/>
                    <button className="button clear-done" onClick={this.handleClearCompleted}>Clear Completed</button>
                </div>
            </form>
        )
    }
}

export default TodoForm;