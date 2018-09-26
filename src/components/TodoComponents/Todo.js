import React from 'react';

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
            return (<li onClick={this.handleClick}><strike>{this.state.todoItem.task}</strike></li>)
        }
        
        return (<li onClick={this.handleClick}>{this.state.todoItem.task}</li>)
    }
    
}

export default Todo;