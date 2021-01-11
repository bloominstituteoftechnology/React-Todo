import React from 'react';
import './Todo.css';
class Todo extends React.Component{
     handleClick = () => {
        this.props.handleTodoToggle(this.props.item.id)
    }
    render(){
        return(
            <div onClick={this.handleClick}  className={`item${this.props.item.purchased ? ' purchased' : ''}`}>
                <h2>{this.props.item.name}</h2>
            </div>
        )
    }
}
export default Todo;