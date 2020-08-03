// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo'

export class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todos.map(todo=>(
                    <Todo key={todo.id} toggleItem={this.props.toggleItem} task={this.task} todo={todo}/>
                ))}
                <button onClick={(e)=>this.props.clearTodo(e)}>Remove Done Tasks</button>
                             
            </div>
        )
    }
}

export default TodoList
