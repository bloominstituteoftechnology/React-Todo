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
        const todos = this.state.todos;
        const newTodo = this.state.newTodo;
        todos.push(newTodo);
        this.setState({todos: todos, newTodo: ''});
    }
    render() {
        return (
            <div>
    
            {this.state.todos.map((item, index) => {
                return(<Todo key={index} todo={item} />)
            })}
            <form onSubmit={this.addTodo}>
            <input type="text" placeholder="Add Todo" value={ this.state.newTodo } 
               onChange={this.handleChange} />
               </form>
            </div>
        );
    }

}
export default TodoList;