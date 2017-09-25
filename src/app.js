import React, { Component } from 'react';
import { render } from 'react-dom';
import List from './list.js';

class App extends Component {
    constructor() {
        super();
        const todos = JSON.parse(localStorage.getItem("todos"));
        this.state = {
            todos: todos || [],
            newItem: {
                text: '',
                completed: false
            }
        }
        this.handleNewToDo = this.handleNewToDo.bind(this);
        this.addItem = this.addItem.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.removeItems = this.removeItems.bind(this);
    }
    addItem(event) {
        event.preventDefault();
        const todos = this.state.todos;
        const item = this.state.newItem
        todos.push(item);
        this.setState({
            todos: todos,
            newItem: {
                text: '',
                completed: false
            }
        })
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    handleNewToDo(event) {
        this.setState({newItem: { text: event.target.value }})
    };

    removeItems(){
        let todos = this.state.todos;    
        this.state.todos = todos.filter((todo) => {
          return !todo.completed;
        });
        todos = this.state.todos;   
        this.setState({todos: todos,
          newTodo: {text: '', completed: false}});
        localStorage.setItem("todos", JSON.stringify(todos));
      }

    handleClick(todo) {
        todo.completed = true;
        const todos = this.state.todos;
        this.setState({
            todos: todos,
            newItem: {
                text: '',
                completed: false
            }
        })
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    isDone() {
        let truth = 0;
        for (let i = 0; i < this.state.todos.length; i++) {
            if (this.state.todos[i].completed) {
                truth += 1;
            }
        };
        if (truth === this.state.todos.length && truth !== 0) {
            return true;
        };
        return false;
    }

    render() {
        return (
            <div>
                <div className={(this.state.todos.length === 7) ? "list2" : "list"}>
                    <div  className={(this.isDone()) ? "done" : "hidden"}>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> all done!</p>
                    </div>
                    {this.state.todos.map((name, i) => <div key={i} className={name.completed ? "completedItem" : "incompleteItem"}>
                    <i className="fa fa-check-circle" aria-hidden="true" onClick={() => this.handleClick(name)} key={i}></i> {i + 1}. { name.text } </div>)}
                <form onSubmit={this.addItem}>
                    <input type='text' onChange={this.handleNewToDo} placeholder="Add a To-do!" value={this.state.newItem.text}  className="textBox"/>
                </form>
                </div>
                <div>
                    <button  className={(this.state.todos.length > 0) ? "btn btn-success remove" : "hidden"} onClick={this.removeItems}>Click to remove completed items.</button>
                </div>
            </div>
        )
    }
}

export default App;