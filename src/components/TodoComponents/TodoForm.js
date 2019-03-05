import React from 'react'

const TodoForm = (props) => {
    return (
        <form className='formContainer' onSubmit={props.addTodo}>
            <input className='todoInput' onChange={props.changeInput} value={props.vOS}></input>
            <div className='button addTodo' onClick={props.addTodo}>add todo</div>
            <div className='button clearCompleted' onClick={props.clearCompleted}>clear completed</div>
        </form>
    )
}

export default TodoForm