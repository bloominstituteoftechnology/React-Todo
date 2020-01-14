import React from "react";
import TodoForm from "./TodoForm"

export default class TodoList extends React.Component {
    state = {
        todos: []
    };

    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos];
        })
    }

    render() {
        return (
            <div>
                <TodoForm onSubmit={this.addTodo}/>
                {JSON.stringify(this.state.todos)}
            </div>

        )
    }
}