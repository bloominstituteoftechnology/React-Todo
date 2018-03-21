import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            Todos: ['Brush cat'],
            nextTodo: ""
        };
    }

    todoChange = event => {
        this.setState({nextTodo: event.target.value });
    }

    todoSubmit = event => {
        event.preventDefault();
        const nextTodos = this.state.nextTodo;
        const todosArray = this.state.Todos;
        todosArray.push(nextTodos);
        this.setState({Todos: todosArray, nextTodo: "" });
    };

    render() {
        return (
            <div>
                {this.state.Todos.map((todo, i) => {
                    return(
                        <div>
                            <ul> 
                                <li key={i}>{todo}</li>
                            </ul>
                        </div>
                    );
                })}
                <form onSubmit={this.todoSubmit}>
                    <input
                    type="text"
                    value={this.state.nextTodo}
                    onChange={this.todoChange}
                    />
                </form>
            </div>  
        );
    }
}

export default TodoList;