import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(){
        super();
        this.state = {
            todos:[],
            newTodo: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Todo todos={ this.state.todos } />
                <input type="text" placeholder="Add Todo" value={ this.state.newTodo } 
                       onChange={this.handleChange} />
            </form>
        )
    }

    handleSubmit(event) {
        event.preventDefault()
        const newTodos = this.state.todos;
        newTodos.push(this.state.newTodo);
        this.setState({todos: newTodos, newTodo: ''});    
    }

    handleChange(event) {
        this.setState({newTodo: event.target.value, todos: this.state.todos});
    }
}

export default TodoList;