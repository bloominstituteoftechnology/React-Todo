import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(){
        super();
        //this.handler = this.handler.bind(this);
        this.state = {
            todos: [],
            newTodo: {text: '', completed: false},
        };
    }

    completed = (child) => {
        console.log("from child", child.target);
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
            todos: newTodos,
            newTodo: {text: '', completed: false},
        });
    }; 
    
    getToDoItemInput = (event) => {
       const updateNewTodo = this.state.newTodo;
       updateNewTodo.text = event.target.value;
        this.setState({
            newTodo: updateNewTodo,
        });
    };

    render() {
        return (
            <div>
                {this.state.todos.map((todo, i) => {
                    return <Todo key={i} todo={todo} completed={this.completed}/>
                })}
                <form onSubmit={this.addTodo}>
                    <input text="text" onChange={this.getToDoItemInput} placeholder="Enter a to do item" value={this.state.newTodo.text}/>
                    <button onClick={this.addTodo}>Add Item</button>
                </form>
            </div>
        );
    }
}

export default TodoList;