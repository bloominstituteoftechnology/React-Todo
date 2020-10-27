import React from 'react'
import ToDo from './Todo'

const TodoList = props => {
    // for sorting the list based on whether a to do has been done or not
    // const sortedList = props.todo.sort((a, b) => a.done - b.done);

    const handleClick = () => {
        props.handleClearTodos();
    }

    return (
        <div className="todo-list">
            {props.todos.map(todo => (
                <ToDo handleToggleTodo={props.handleToggleTodo} key={todo.id} todo={todo} />
            ))}
            <buton onClick={handleClick} className="clear-btn">
                Clear Todo
            </buton>
        </div>
    )
}

export default TodoList;
