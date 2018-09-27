///TodoList.js

// your components will all go in this `component` directory.

// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import "./Todo.css"


class TodoList extends React.Component {
    // there is no state
    render() {

        // we need two things in props

        // 1. the list

        // 2. a click handler to pass to children
        return (
            <div>
                {this.props.todos.map(todo => {
                    return <Todo
                        key={todo.id}
                        todo={todo}
                        handleClick={this.props.handleClick} />
                })}
            </div>
        )
    }

}



export default TodoList
