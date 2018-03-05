import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor() {
        super();
        
        this.state = {
            todos: ['Eat Lunch', 'Walk dog'],
            newTodo: ''
        };
    }

    handleTodoInput = (event) => {
        this.setState({ newTodo: event.target.value });
    };

    addTodo = (event) => {
        event.preventDefault();
        const todosList = this.state.todos;
        todosList.push(this.state.newTodo);
        this.setState({
            newTodo: '',
            todos: todosList
        });
    };

    render() {
        return (
            <div>
                {this.state.todos.map(todo => <ChildComponent thing={todo} />)}
                <form onSubmit={this.addTodo}>
                    <input type="text" onChange={this.handleTodoInput} placeholder="Add a new ingredient" value={this.state.newTodo} />
                </form>
            </div>
        );
    }
}

export default ParentComponent;