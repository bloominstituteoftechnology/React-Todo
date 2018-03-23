import React, { Component } from 'react';

let strikeThrough = {
    textDecoration: 'line-through'
    
}

let noStrike = {
    textDecoration: 'none'
}

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            Todos: ['Brush cat'],
            nextTodo: "",
            isToggle: false
        };
    }


    toggleCompleted = (i) => {
        this.setState({isToggle: true})

        if (this.state.isToggle) {
            this.setState({isToggle: false})
        }
        console.log(this.state.isToggle);
        console.log('clicked', i);
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
                        <div style={this.todo ? strikeThrough : noStrike} key={index} onClick={() => this.toggleCompleted(index)}>
                            {todo}
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