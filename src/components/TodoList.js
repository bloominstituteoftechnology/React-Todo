// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo.js'

class TodoList extends React.Component {
    onClicky = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.props.clearCompleted()
    }
    render() {
        return (
            <>
                {this.props.list.map(item => {
                    return <Todo item={item} handleToggle={this.props.handleToggle} />
                })}
                <button onClick={this.onClicky}>remove completed</button>
            </>
        )
    }
}
export default TodoList