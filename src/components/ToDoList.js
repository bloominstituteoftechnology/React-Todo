import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            todos: [],
            newTodo: {text: '', completed: false},
        };
    }

    componentDidMount() {
        this.checkLocalStorage();
    }

    checkLocalStorage = () => {
        //get from local storage
        if(this.getTodos()) {
            const localTodos = JSON.parse(this.getTodos());
            this.setState({
                // set the todos
                todos: localTodos,
            });
        }
    }

    getTodos = () => {
        return localStorage.getItem("todos");
    }

    setTodo = (item) => {
        return localStorage.setItem('todos', item);
    }

    removeTodos = () => {
        return localStorage.removeItem("todos");
    };

    completed = (index, clicked) => {
        const newTodos = this.state.todos;
        newTodos[index].completed = clicked;  
        this.setState({
            todos: newTodos,
        });

        // add todo to local storage
        this.setTodo(JSON.stringify(newTodos));
    }

    remove = (index) => {
        const newTodos = this.state.todos;
        newTodos.splice(index,1);  
        this.setState({
            todos: newTodos,
        });
        // add/ update todo to local storage
        this.setTodo(JSON.stringify(newTodos));
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

        // add/update todo to local storage
        this.setTodo(JSON.stringify(newTodos));
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
                    return <Todo key={i} index = {i} todo={todo} completed={this.completed} remove={this.remove}/>
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