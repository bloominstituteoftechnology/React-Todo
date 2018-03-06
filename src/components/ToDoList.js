import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            todos: [],
            newTodo: '',
        };
    }

    addTodo = (event) => {
        event.preventDefault();
        // Make new copies of the array and item
        const newTodos = this.state.todos;
        const newTodo = this.state.newTodo;
        
        // push the new item into the item list
        newTodos.push(newTodo)
        
       // reset the newToDoItem to empty, and update the item list
        this.setState({
            newTodo: '',
            todos: newTodos,
        });
    }; 
    
    getToDoItemInput = (event) => {
        this.setState({
            newTodo: event.target.value,
        });
    };

    render() {
        return (
            <div>
                {this.state.todos.map((item, index) => {
                    return <Todo key={index} todo={item} />
                })}
                <form onSubmit={this.addTodo}>
                    <input text="text" onChange={this.getToDoItemInput} placeholder="Enter a to do item" value={this.state.newTodo}/>
                    <button onClick={this.addTodo}>Add Item</button>
                </form>
            </div>
        );
    }
}

export default TodoList;