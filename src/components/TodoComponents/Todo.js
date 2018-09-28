import React from 'react';

class Todo extends React.Component {


    completedHandler = (e) => {
        this.props.strike(this.props.item.id)
        if (this.props.item.completed === false) {
            e.target.style.textDecoration = 'line-through'
        } else {
            e.target.style.textDecoration = 'none'
        }

    };

    render() {
        return (
            <p onClick={this.completedHandler}>{this.props.item.task}</p>
            
        )
    }
}

export default Todo
