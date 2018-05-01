import React, { Component } from 'react';
import Todo from './Todo.js';
import './TodoList.css'


class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                        // {
                        //     task: 'Organize Garage',
                        //     id: 1,
                        //     completed: false
                        // },
                        // {
                        //     task: 'Bake Cookies',
                        //     id: 2,
                        //     completed: false
                        // }
            ], 
            newTodo: {},
            inputVal: ""
            // newTodo: {task: "", id: "", completed: false},
        }
    }

handleNewTodo = (event) => {
    this.setState({[event.target.name]: event.target.value});
    
}

handleSubmitTodo = () => {
    const todos = this.state.todos;
    const newTodo = {task: this.state.inputVal, id: this.state.inputVal, completed: false}
    todos.push(newTodo)
    this.setState({todos: todos, inputVal: ""});
}

handleToggleCompleted = (event) => {
    let completed = this.state.todos.completed;
//    this.setState({completed: !completed})
    // console.log(event.target.value)
    let toBeDeleted = event.target.value;
    this.state.todos.slice(toBeDeleted);
}

    render() {
        return (
            <div>
                <ul>{this.state.todos.map((todo) => {return <Todo delete={this.handleToggleCompleted} key={todo.id} todo={todo} />})}</ul>
                <input className="inputField" onChange={this.handleNewTodo} type="text" placeholder="new todo" name="inputVal" value={this.state.inputVal}></input>
                <button className="todoBtn" onClick={this.handleSubmitTodo}>Add Todo</button>
            </div>
        )
    }
}



export default TodoList; 
