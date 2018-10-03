import React from 'react'
import './Todo.css'

const TodoList = props => {
    return (
        <div>
            {props.todoListArray.map(eachTodoObj => <div> Task: {eachTodoObj.task}</div>)}
        </div>
    )
}

export default TodoList
{/* <h1>{props.propsTodoList}</h1> */}

// Task: {props.todoList.map(items => <Todo propsTodoList={items.task} />)}