import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.todo);
        return (
<div className={this.props.todo.completed ? "completed" : ""}>
    {this.props.todo.task}
</div>
        );
    }
}

export default Todo;