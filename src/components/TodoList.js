import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ['test item 1', 'test item 2', 'test item 3'],
            newItem: ""
        }
    }

    render() {
        return (
            <div>
            <ul>
            {this.state.todos.map((item, index) => {
                return(<Todo key={index} todo={item} />)
            })}
            </ul>
            <form onSubmit={this.addTodo}>
            <input type="text" placeholder="Add Todo" value={ this.state.newTodo } 
               onChange={this.handleChange} />
               </form>
            </div>
        );
    }

}
export default TodoList;