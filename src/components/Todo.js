import React from 'react';

class Todo extends React.Component {
    constructor (props) {
        super ();
        this.state = {
            todo : props.todo
        }

    }

    render () {
        return (
            <h2>{this.state.todo.task}</h2>
        )
    }
}

export default Todo