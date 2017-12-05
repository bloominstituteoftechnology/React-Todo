import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: ''
        };
    }


addTodo = (e) => {
    e.preventDefault();
    const todoList = this.state.todos;
    updatedTodos.push(this.state.newTodo);
    this.setState({
        todos: updatedTodos,
        newTodo: ''
    });
}
    handleNewTodoInput = (e) => {
        this.setState({ newTodo: e.target.value });
};

    render() {
        return (
            <div>
                {this.state.todos.map((todo, i) => <Todo key={i} index={i} todo={todo} />)}
                <form onSubmit={this.addTodo}>
                    <input onChange={this.handleNewTodoInput} placeholder="Add new todo" value={this.state.newTodo} type="text" />
                </form>
                </div>
        );
    }
}

export default TodoList;