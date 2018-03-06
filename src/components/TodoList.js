import React, { Component } from 'react';
import Todo from './Todo';
import DeleteButton from './DeleteButton';

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            todos: [],
            newTodo: {'text': '', 'completed': false, 'selected': null},
            selected: null
        };
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    handleTodoListInput = (event) => {
        this.setState({ newTodo: event.target.value });
    };

    addTodo = (event) => {
        event.preventDefault();
        const todoList = this.state.todos;
        todoList.push(this.state.newTodo);
        this.setState({
            newTodo: {'text': '', 'completed': false},
            todos: todoList
        });
    };

    addCompletedButton = (index) => {
        this.setState({
            selected: index
        });
    };

    deleteTodo(item) {
        this.setState({
            todo: this.state.todo.filter(el => el !== item)
        });
    };

    render() {
        return (
            <div>
                {this.state.todos.map((item, index) => <div> <Todo todo={item} /> <DeleteButton key={index} index={i} action={this.addCompletedButton} deleteButton={item} /></div>)}
                <form onSubmit={this.addTodo}>
                    <input type="text" onChange={this.handleTodoListInput} placeholder="Add new todo item" value={this.state.newTodo.text} />
                    
                </form>
            </div>
        );
    }

    
}

export default TodoList;