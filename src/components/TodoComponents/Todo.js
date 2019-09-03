import React from 'react';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div 
            onClick={() => this.props.toggleCompleted(this.props.todo.id)}
            className={this.props.todo.completed ? "completed" : ""}>
                {console.log(this.props.todo)}
                <p>{this.props.todo.task}</p>
            </div>
        )
    }
}

export default Todo