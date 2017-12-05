import React, { Component } from 'react';
import ChildComponent from './Todo';

class ParentComponent extends Component {
    constructor() {
        super();

        this.state = {
            todos: [],
            newTodo: ''
        };
    }

    handleIngredientInput = (event) => {
        this.setState({ newTodo: event.target.value });
    };

    addTodo = (event) => {
        event.preventDefault();
        const todoList = this.state.todos;
       todoList.push(this.state.newTodo);
        this.setState({newTodo: '', todos: todoList});
    }

    render() {
        return (
            <div>
                {this.state.todos.map(todo => <ChildComponent thing={todo} />)}
                <form onSubmit={this.addTodo}>
                    <input type="text" onChange={this.handleIngredientInput} placeholder="Add a new todo" value={this.state.newTodo} />
                </form>
            </div>
        );
    }
}
export default ParentComponent;