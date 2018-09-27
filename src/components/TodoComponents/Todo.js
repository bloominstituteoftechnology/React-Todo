import React from 'react';
import './Todo.css'
class Todo extends React.Component {
    render(props) {
        return (
            <div onClick={this.props.clickHandler}>{this.props.todo.task}</div>
        )
    }   
}

export default Todo;