import React, { Component } from 'react';

let strikeThrough = {textDecoration: 'none'}

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            Todos: ['Brush cat'],
            nextTodo: "",
            isToggle: this.isToggle
        };
    }


    toggleCompleted = e => {
        this.setState({isToggle: !this.state.isToggle})

        strikeThrough={textDecoration: !this.state.isToggle ? 'line-through' : 'none'}
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
                {this.state.Todos.map((todo, index) => {
                    return(
                        <div key={index}>
                            <li> 
                                <a onClick={(e) => this.toggleCompleted(e)}>
                                    {todo}
                                </a>
                            </li>
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