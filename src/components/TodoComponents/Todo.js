import React from 'react'

const Todo = ({todos, deleteTodo}) => {
    const Todos = todos.length ? (
        todos.map(todos => {
            return (
                <div className='collection-item' key={ todos.id }>
                    <span onClick={() => {deleteTodo(todos.id)}}>{ todos.task }</span>
                </div>
            )
          })
     ) : (  
        <p className="center">You have no todo's left, yay!</p>
    )
    return (
        <div className="todo">
            {Todos}
        </div>
    )
}

export default Todo;