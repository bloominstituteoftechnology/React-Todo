import React from 'react';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div>
            <h4>this is Todo component</h4>
            {console.log(this.props.toDoItem.task)}
            </div>
        )
    }
}

export default Todo