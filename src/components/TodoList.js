import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: "Please type something"
        }
    }
    handleChange = (e) => {
        this.setState({
            newTodo: e.target.value
        })
    }
    addTodo = () => {
        this.setState({
            todos: [...this.state.todos, { task: this.state.newTodo, completed: false}],
            newTodo: ""
        })
    }
    removeTodo = (clickedIndex) => {
        const currentTodos = this.state.todos
        for(let i=0; i<currentTodos.length; i++){
            if (i === clickedIndex) currentTodos[i].completed = !currentTodos[i].completed
        }
        this.setState({
            todos: currentTodos
        })
    }

render() {
return (
    <div>
        <input name="inputField" type="text" value={this.state.newTodo} onChange={e => this.handleChange(e)}/>
        <button onClick={this.addTodo}>+</button>
        {this.state.todos.map((todo, i) =>
            todo && !todo.completed?
                <Todo key={i} todo={todo} handleClick={e => this.removeTodo(i)}/>
            :
            ""
        )}
        <div>Completed:</div>
        {this.state.todos.map((todo, i) =>
            todo && todo.completed?
                <Todo key={i} todo={todo} handleClick={e => this.removeTodo(i)}/>
            :
            ""
        )}
    </div>
)
}}

export default TodoList;