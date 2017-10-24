import React, { Component } from 'react';
import Todo from './Todo-list';

class App extends Component {
    constructor() {
        super();
        if(!localStorage.getItem("_ratatouille") || JSON.parse(localStorage.getItem("_ratatouille")).todo.length === 0) {  
            const defaultList = { todo:[
                { text: "Do something", completed: false }, 
                { text: "Do another thing", completed: true },
                { text: "Yet another", completed: false }
            ]};
            localStorage.setItem("_ratatouille", JSON.stringify(defaultList));
               }
        const parsedList = JSON.parse(localStorage.getItem("_ratatouille"));
        this.state = { 
            list: parsedList.todo,
            inputValue: ''
        }
    }
    handleListChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.inputValue === '') return;
        const list = this.state.list;
        const newItem = this.state.inputValue;
        list.push({ text: newItem, completed: false });
        localStorage.setItem("_ratatouille", JSON.stringify({ 'todo': list }));
        this.setState({
            list,
            inputValue: ''
        });
    }
    handleRemove = (event) => {
        const list = this.state.list;
        const index = event.target.dataset.set;
        list.splice(index, 1);
        localStorage.setItem("_ratatouille", JSON.stringify({ 'todo': list }));
        this.setState({ list });
    }
    handleComplete = (event) => {
        const list = this.state.list;
        const index = event.target.dataset.set;
        if (!list[index]) return;
        if (list[index].completed) {
            list[index].completed = false;
        } else {
            list[index].completed = true;
        }
        localStorage.setItem("_ratatouille", JSON.stringify({ 'todo': list }));
        this.setState({ list });
    }
    render() {
        return (
            <div>
                <Todo 
                    list={this.state.list}
                    handleListChange={this.handleListChange}
                    inputValue={this.state.inputValue} 
                    handleSubmit={this.handleSubmit}
                    handleRemove={this.handleRemove} 
                    handleComplete={this.handleComplete} />
            </div>
            );
    }
}

export default App;