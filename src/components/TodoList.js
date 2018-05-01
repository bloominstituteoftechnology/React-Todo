import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: ""
        }
    }
    handleChange = (e) => {
        if (e.key === "Enter" && this.state.newTodo !== "") {
            this.addTodo()
        } else {
            this.setState({
                newTodo: this.state.newTodo + e.key
            })
        }
    }
    addTodo = (e) => {
        this.setState({
            todos: [...this.state.todos, this.state.newTodo],
            newTodo: ""
        })
    }

render() {
return (
    <div>
        <input name="inputField" type="text" value={this.state.newTodo} onKeyPress={e => this.handleChange(e)}/>
        {this.state.todos.map((todo, i) => 
            <Todo key={i} todo={todo}>{todo}</Todo>
        )}
    </div>
)
}}

export default TodoList;