// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.todosList.map(todo => <Todo key={todo.id}
                    todo={todo}
                    toggleCompleted={this.props.toggleCompleted}
                />)}
            </div>
        );
    }
}
export default TodoList;
