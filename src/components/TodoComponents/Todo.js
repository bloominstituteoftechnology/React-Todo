import React from 'react'
import './Todo.css'

const Todo = props => {
    return (
        <ul><li className={props.classNameProp} onClick={() => props.completedTask(props.passedKey)}>{props.singleTodo}</li></ul>
    )
}
export default Todo;