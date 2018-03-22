import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    toggleTodo(target, id) {
        const Todos = this.state.todos;
        Todos[id].checked = !Todos[id].checked;
        if (Todos[id].checked) {
            target.parentNode.style.textDecoration = "line-through";
        } else {
            target.parentNode.style.textDecoration = "none";
        }
        this.setState({
            todos: Todos,
            newTodo: ""
        });
    }

    deleteTodo(id) {
        const Todos = this.state.todos;
        Todos.splice(id, 1);
        this.setState({
            todos: Todos,
            newTodo: ""
        });
    }

    render() {
        return (
            <div>
                <ul>
                { this.state.todos.map((todo, i) => {
                    return (
                        <Todo key={i} id={i} todo={todo} toggle={ this.toggleTodo }
                              delete={ this.deleteTodo } />
                        )
                    })
                }
                </ul>
                <form onSubmit={this.addTodo}>
                    <input type="text" placeholder="Add Todo" value={ this.state.newTodo } 
                       onChange={this.handleChange} />
                </form>
            </div>
        )
    }

    addTodo(event) {
        event.preventDefault()
        const newTodos = this.state.todos;
        newTodos.push({
            content: this.state.newTodo,
            checked: false
        });
        this.setState({todos: newTodos, newTodo: ''});    
    }

    handleChange(event) {
        this.setState({newTodo: event.target.value, todos: this.state.todos});
    }
}

export default TodoList;