import React from 'react'

import Todo from './Todo'
import TodoForm from './TodoForm'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
    render() {
        return (
            <>
            <h2>Welcome to your Todo App!</h2>
            <Todo 
            tdList={this.props.tdList}
            handleClick={this.props.handleClick}
            />
            <TodoForm 
            handleClear={this.props.handleClear}
            handleSubmit={this.props.handleSubmit}
            handleAdd={this.props.handleAdd}
            />
            </>
        )
    }
}

export default TodoList