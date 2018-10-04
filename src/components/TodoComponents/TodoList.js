import React from 'react'
import './Todo.css'

const TodoList = props => {
    return (
        <div>
            <h1>Todo List: MVP</h1>
            {props.todoListArray.map((eachTodo, index) => 
            <h3 
                onClick={() => props.toggleCompletion(index) }
                className={eachTodo.completed ? "complete" : "incomplete"}
                key={index}
            > 
                {eachTodo.task} {console.log(eachTodo)}
            </h3>)}
        </div>
    )
}

export default TodoList
{/* <h1>{props.propsTodoList}</h1> */}

// Task: {props.todoList.map(items => <Todo propsTodoList={items.task} />)}