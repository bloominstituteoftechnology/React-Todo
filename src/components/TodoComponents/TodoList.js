import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            task: 'test'
        }
    }

    render() {
        return(
            <Todo task={this.state.task}/>
        )
    }
}

export default TodoList;