import React, { Component } from 'react';
import Todo from './Todo';
import './index.css';

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
    <div className="root">
        <div className="input">
            <input name="inputField" type="text" value={this.state.newTodo} onChange={e => this.handleChange(e)}/>
            <button onClick={this.addTodo}>+</button>
        </div>
        <div className="list">
            <div className="complete-list">
                <h5>New Task</h5>
                {this.state.todos.map((todo, i) =>
                    todo && !todo.completed?
                        <Todo key={i} todo={todo} handleClick={e => this.removeTodo(i)}/>
                    :
                    ""
                )}
            </div>
            <div className="incomplete-list">
                <h5>Completed</h5>
                {this.state.todos.map((todo, i) =>
                    todo && todo.completed?
                        <Todo key={i} todo={todo} handleClick={e => this.removeTodo(i)}/>
                    :
                    ""
                )}
            </div>
        </div>
    </div>
)
}}

export default TodoList;