import React from 'react';
import './Todo.css'

class Todo extends React.Component {
    render(){
        return(
            <div 
            className={`task${this.props.item.completed ? ' purchased' : ''}`}
            onClick={() => this.props.toggleItem(this.props.item.id)}>
                <div>{this.props.item.task}</div>
            </div>
        )
    }
}

export default Todo;