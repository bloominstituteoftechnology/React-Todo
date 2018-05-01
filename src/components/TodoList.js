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
            ]
        }
    }

    render() {
        return (
            <div>
                <ul>{this.state.todos.map((todo) => {return <Todo key={todo.id} todo={todo} />})}</ul>
            </div>
        )
    }
}



export default TodoList; 
