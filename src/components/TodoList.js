import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: ""
        }
    }

    addTodo = (e) => {
        e.preventDefault();
        const todos = this.state.todos;
        const newTodo = this.state.newTodo;
        todos.push(newTodo);
        this.setState({todos: todos, newTodo: ''});
    }

    handleInput = (e) => {
        e.preventDefault();
        const newTodo = e.target.value;
        this.setState({newTodo: newTodo});
    };
    render() {
        return (
            <div>

            {this.state.todos.map((todo, i) => <Todo todo={todo} key={i}/>)}

            <form onSubmit={this.addTodo}>
            <input type="text" placeholder="Add Todo" 
               value={ this.state.newTodo } 
               onChange={this.handleInput} />
               </form>
            </div>
        );
    }

}
export default TodoList;