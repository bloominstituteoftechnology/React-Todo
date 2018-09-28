import React from 'react';

class Todo extends React.Component {


    completedHandler = (e) => {
        this.props.strike(this.props.item.id)
        if (this.props.item.completed === false) {
            e.target.style.textDecoration = 'line-through'
            e.target.style.color = 'grey'
        } else {
            e.target.style.textDecoration = 'none'
            e.target.style.color = 'black'
        }

    };

    render() {
        return (
            <div onClick={this.completedHandler} className="todoItem">{this.props.item.task}</div>
            
        )
    }
}

export default Todo
