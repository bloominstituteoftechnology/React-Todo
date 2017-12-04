import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: '',
        };
    }

    handleTodos = (event) => {
        this.setState({newTodo: event.target.value});
    }

    addTodo = (event) => {
        event.preventDefault(); // Preventes page from refreshing after submit form
        const todoList = this.state.todos;
        todoList.push(this.state.newTodo);
        this.setState({
            newTodo: '',
            todos: todoList
        });
    }

    render() {
        return (
            <div>
                {this.state.todos.map((todo, index) => 
                    {
                        return (
                            <Todo index={index} todo={todo} key={index} />
                        );
                    })
                }
                <form onSubmit={this.addTodo}>
                    <input onChange={this.handleTodos} value={this.state.newTodo}/>
                </form>
            </div>
        );
    }
}

export default TodoList;
