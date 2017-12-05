import React, { Component } from 'react';
import TodoComponent from './TodoComponent.js';

import ToDoItemComponent from './TodoItemComponent.js';

class TodoListComponent extends Component {
    constructor() {
        super();

        this.state = {
            FinishedItems: [],
            TodoItems: [],
            LatestItem: ''
        };        
    }

    switchList = (doto_item, to_type) => {
        if(to_type === "finished")
        {
            
        }
        else if(to_type === "unfinished")
        {

        }
    };

    inputHandler = (e) => {
        this.setState({ LatestItem: e.target.value });
    };

    addItem = (e) => {
        e.preventDefault();

        const items_list = this.state.TodoItems;

        const todo_item = new ToDoItemComponent(
            items_list.length + 1, 
            this.state.LatestItem,
            false,
            {color: 'red'}
        ); 

        items_list.push(todo_item);
            
        this.setState({
            LatestItem: '',
            TodoItems: items_list
        });

        e.target.reset();
    };

    render() {
        return (            
            <div>
                <table>
                    <tbody>
                        {this.state.TodoItems.map(item => <TodoComponent TodoItem={item} />)}
                    </tbody>
                </table>
                
                <form onSubmit={this.addItem}>
                    <input type="text" onChange={this.inputHandler} placeholder="Todo Item" />
                </form>
            </div>
        );
    }
}

export default TodoListComponent;