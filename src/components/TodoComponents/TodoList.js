import React from "react";
import TodoForm from "./TodoForm.js";
import Todo from "./Todo.js";

class TodoList extends React.Component {
    state = {
        todos: []
    };

    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    }

    render() {
        return (
            <div>
                <TodoForm onSubmit={this.addTodo}/>
                {this.state.todos.map(todo => (
                    <Todo key={todo.id} text={todo.text}/>
                ))}
            </div>
        )
    }
}

export default TodoList;