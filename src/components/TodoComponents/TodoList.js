import React from 'react'
import './Todo.css'

const TodoList = props => {
    return (
        <div>
            <h1>Todo List: MVP</h1>
            {props.todoListArray.map((eachTodoObj, index) => <h3 onClick={() => props.toggleCompletion(index) }> {eachTodoObj.task} {console.log(eachTodoObj)}</h3>)}
        </div>
    )
}

export default TodoList
{/* <h1>{props.propsTodoList}</h1> */}

// Task: {props.todoList.map(items => <Todo propsTodoList={items.task} />)}