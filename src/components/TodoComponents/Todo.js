import React from 'react';
import './Todo.css'

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoItem: props.todoItemData
        }
    }

    handleClick = (event)=>{
        this.props.completeTask(this.state.todoItem.id)
    }

    render(){
        if(this.state.todoItem.isCompleted){
            return (<li className="todo-item" onClick={this.handleClick}><strike className="strike-text">{this.state.todoItem.task}</strike></li>)
        }
        
        return (<li className="todo-item" onClick={this.handleClick}>{this.state.todoItem.task}</li>)
    }
    
}

export default Todo;