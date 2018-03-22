import React, { Component } from 'react';

let strikeThrough = {textDecoration: "underline"};

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Todos: ['Brush cat'],
            nextTodo: "",
            completed: this.props.completed,
        };
    }

    toggleCompleted = () => {
        this.setState({completed: !this.props.completed})

        if(!this.props.completed) {
            this.setState({completed: this.props.completed})
            strikeThrough = {textDecoration: "line-through"}
        }
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
                                <li style={strikeThrough} key={i}>{todo}
                                <input type="checkbox" checked={this.state.completed} onChange={() => this.toggleCompleted()} />
                                </li>
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