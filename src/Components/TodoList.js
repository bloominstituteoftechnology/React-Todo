import React, { Component } from 'react';
import Todo from './Todo'


class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            Todos: [],
            nextTodo: "",
        };
    }


    toggleCompleted = (index) => {
        const todos = this.state.Todos;
        todos[index].clicked = !todos[index].clicked
        this.setState({todos})
    }

    todoChange = event => {
        this.setState({nextTodo: event.target.value });
    }

    todoSubmit = event => {
        event.preventDefault();
        const nextTodos = {body: this.state.nextTodo, clicked: false};
        const todosArray = this.state.Todos;
        todosArray.push(nextTodos);
        this.setState({Todos: todosArray, nextTodo: "" });
    };
    
    render() {
        return (
            <div>
                {this.state.Todos.map((todo, index) => {
                    return(
                        <Todo todo={todo} toggleCompleted={this.toggleCompleted} index={index} key={index} />
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