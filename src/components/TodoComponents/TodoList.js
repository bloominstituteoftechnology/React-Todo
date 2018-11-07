// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
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