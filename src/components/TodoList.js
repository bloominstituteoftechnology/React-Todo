import React, { Component } from 'react';
import Todo from './Todo.js';


class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                        {
                            task: 'Organize Garage',
                            id: 1,
                            completed: false
                        },
                        {
                            task: 'Bake Cookies',
                            id: 2,
                            completed: false
                        }
            ], 
            newTodo: {task: "", id: "", completed: false}
        }
    }

handleNewTodo = (event) => {
    const {newTodo} = this.state.newTodo;
    this.setState({[event.target.name]: event.target.value})
}

handleSubmitTodo = () => {
    const {todos} = this.state.todos;
    this.setState({todos: todos.push(this.state.newTodo)});
}


    render() {
        return (
            <div>
                <ul>{this.state.todos.map((todo) => {return <Todo key={todo.id} todo={todo} />})}</ul>
                <input type="text" placeholder="new todo" name="newTodo" value={this.state.newTodo}></input>
                <button onClick={this.handleSubmitTodo}>Add Todo</button>
            </div>
        )
    }
}



export default TodoList; 
