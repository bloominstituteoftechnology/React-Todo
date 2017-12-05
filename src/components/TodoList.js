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
    removeTodo = (event) => { // Handle Deleting of Todos from todos array.
        const arrCopy = this.state.todos;
        arrCopy.splice(event.target.id, 1);
        this.setState({todos: arrCopy});
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
        let styles = { display: 'inline-flex' , width: '400px'}
        return (
            <div>
                {this.state.todos.map((todo, index) => 
                        <div key={index}>
                            <div key={index} style={styles}>
                                <Todo key={index} todo={todo}/>
                                <button id={index} onClick={this.removeTodo}>Delete</button>{/* Delete Button */}
                            </div>
                        </div>
                    )
                }
                <form onSubmit={this.addTodo}>
                    <input onChange={this.handleTodos} value={this.state.newTodo}/>
                </form>
            </div>
        );
    }
}

export default TodoList;
