import React from 'react';

class Todo extends React.Component {
    constructor(){super();}

    render () {
        return (
            <h3>{this.props.task}</h3>
        )
    }
}

export default Todo;