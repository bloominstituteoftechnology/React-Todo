import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    state = {
        items: ['Go to the gym', 'Do laundry', 'Create a React App'],
        newItem: ''
    }


    addItem = (event) => {
        event.preventDefault();
        const todoList = this.state.items;
        todoList.push(this.state.newItem);
        this.setState({
            newItem: '',
            items: todoList
        });
    };

    handleInput = (event) => {
        this.setState({ newItem: event.target.value });
    }

    render() {
        return (
            <div>
                {this.state.items.map(item => <Todo thing={item} />)}
                <form onSubmit={this.addItem}>
                <input type="text" onChange={this.handleInput} placeholder="Add a new task" value={this.state.newItem}/>
            </form>
            </div>
        );
    }
}

export default TodoList;