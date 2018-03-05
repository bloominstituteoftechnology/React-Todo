import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: ''
        }
    }

    addTodo = (event) => {
        event.preventDefault();
        const newItems = this.state.todos;
        newItems.push(this.state.newTodo);
        this.setState({
            todos: newItems,
            newTodo: ''
        })
    }

    handleEntNewItem = (event) => {
        this.setState({newTodo: event.target.value})
    }

    render() {
        return (
            <div>
                {this.state.todos.map((todo, i) => <Todo key ={i} todo={todo} />)}
                <form onSubmit={this.addTodo}>
                    <input type="text" onChange={this.handleEntNewItem} placeholder="Add a new ToDo Item" value={this.state.newTodoList} />
                </form>
            </div>    
        )
    }
}

export default TodoList;