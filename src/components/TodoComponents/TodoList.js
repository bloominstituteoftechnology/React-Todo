// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react';

import { Button } from 'semantic-ui-react';

import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let todos = this.props.todos;

        if (this.props.hideCompleted) {
            todos = todos.filter(todo => {
                return todo.complete !== true;
            });
        }

        return (
            <>
                <Button
                    content={
                        this.props.hideCompleted
                            ? 'show completed'
                            : 'hide completed'
                    }
                    onClick={this.props.handleHideCompleted}
                />
                {todos.map((todo, index) => {
                    return (
                        <Todo
                            key={todo + index}
                            todo={todo}
                            handleDeleteTask={this.props.handleDeleteTask}
                            handleCompleted={this.props.handleCompleted}
                        />
                    );
                })}
            </>
        );
    }
}

export default TodoList;
