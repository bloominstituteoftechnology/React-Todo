import React from 'react'
import {Todo} from './Todo'

const TodoList = props => {
    return (
        <div className="list">
            {props.todo.map(item => (
                <Todo key={item.id} item={item} toggle={props.toggle}/>
            ))}
            <button onClick={props.rcompleted}>
                Clear Done
            </button>
        </div>
    )
}

export default TodoList;