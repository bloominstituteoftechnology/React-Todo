import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newItem: ""
        }
    }

    render() {
        return (
            <div>
            <form onSubmit={this.addTodo}>
            <input type="text" placeholder="Add Todo" value={ this.state.newTodo } 
               onChange={this.handleChange} />
               </form>
            </div>
        );
    }

}
export default TodoList;