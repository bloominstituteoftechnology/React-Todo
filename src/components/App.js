import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
            todoList: ['Clean House']
        };
        this.updateTodoHandler = this.updateTodoHandler.bind(this);
        this.submitTodoHandler = this.submitTodoHandler.bind(this);
    }

    
    updateTodoHandler(event) {
        this.setState({todo: event.target.value});
    }

    submitTodoHandler() {
        const todoList = this.state.todoList;
        todoList.push(this.state.todo);
        this.setState({ todoList, todo: '' });
    }



    render() {
        return ( 
            <div>
                <TodoInput onTodoInput={this.updateTodoHandler} onTodoSubmit={this.submitTodoHandler} todo={this.state.todo}/>
                <TodoList todos={this.state.todoList} />
            </div>
        );
    }
}

export default App;