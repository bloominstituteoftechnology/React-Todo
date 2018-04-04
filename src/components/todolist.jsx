import React, { Component } from "react";
import todo from "./todo";

class todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: props.todos || [],
            newTodo: ""
        };
    }

    update() {
        this.setState(prevState => {
            return {
                todos: prevState.newTodo.length ? [...prevState.todos, prevState.newTodo] : [...prevState.todos],
                newTodo: ""
            };
        });
    }

    addTodo(e) {
        !!e.target ? this.setState({ newTodo: e.target.value }) : "";
        
        this.update();
        e.preventDefault();
        !!e.target ? (e.target.value = "") : "";
    }

    handleDelete(val) {
        this.setState(prevState => {
            return {
                todos: prevState.todos.filter(todo => todo !== val)
            };
        });
    }

    render() {
        return (
            <div>
                <input onKeyPress={e => (e.key === "Enter" ? this.addTodo(e) : "")} />
                {this.state.todos.map((todo, i) => (
                    <todo todo={todo} key={i} onDelete={val => this.handleDelete(val)} />
                ))}
            </div>
        );
    }
}

export default todolist;