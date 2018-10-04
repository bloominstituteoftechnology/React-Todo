import React from "react"
import Todo from './Todo'
import './Todo.css'

const TodoList = props => {

    return (
      <div>
        {props.taskLists.map(x => {
          return (
            <Todo key={x.id} value={x.task} completed={x.completed} />
          )
        })}
      </div>
    );
  }


export default TodoList