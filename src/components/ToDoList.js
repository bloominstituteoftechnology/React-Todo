import React, { Component } from 'react';

class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: ''
        };
    }

    addTodo = (event) => {
        event.preventDefault();
        const updatedTodos = this.state.todos;
        updatedTodos.push(this.state.newTodo);
        this.setState({
            todos: updatedTodos,
            newTodo: ''
        })
    }

    handleNewTodoInput = (event) => {
        this.setState({ newTodo: event.target.value});
    }

render() {
    return (
        <div>
    {this.state.todos.map((todo, i) => <todo key={i} todo={todo} />)}
    <form onSubmit={this.addTodo}>
    <input onChange={this.handleNewTodoInput} placeholder="type note here :D" value={this.state.newTodo}/>
    </form>
        </div>
    );
}
}

export default ToDoList;