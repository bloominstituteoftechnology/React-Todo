import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
            todoList: []
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
                <TodoList todos={this.state.todoList} />
                <TodoInput onTodoInput={this.updateTodoHandler} onTodoSubmit={this.submitTodoHandler} todo={this.state.todo}/>
            </div>
        );
    }
}

export default App;
