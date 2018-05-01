import React, { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                        {
                            task: 'Finish this',
                            id: 1,
                            completed: false
                        },
                        {
                            task: 'Beg for Help',
                            id: 2,
                            completed: false
                        }
            ], 
            newTodo: "",
            // newTodo: {task: "", id: "", completed: false},
            taskValue: ""
        }
    }

handleNewTodo = (event) => {
    this.setState({[event.target.name]: event.target.value});
}

handleSubmitTodo = () => {
    const todos = this.state.todos;
    const newTodo = {task: this.state.newTodo, id: this.state.newTodo, completed: false}
    todos.push(newTodo)
    this.setState({todos: todos, newTodo: ""});
}
render() {
        return (
            <div>
                <ul>{this.state.todos.map((todo) => {return <Todo key={todo.id} todo={todo} />})}</ul>
                <input onChange={this.handleNewTodo} type="text" placeholder="new todo" name="newTodo" value={this.state.newTodo}></input>
                <button onClick={this.handleSubmitTodo}>Add Todo</button>
            </div>
        )
    }
}



export default TodoList; 