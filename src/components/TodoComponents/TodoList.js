// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo'


const ListItems = (props) => {

  return (
    <ul>
      {props.myTodoList.map(newTodo => {
        return (
            <ToDo
              key = {newTodo.id}
              value = {newTodo.task}
              className = {newTodo.completed}
            />

        )

      }) }

    </ul>
  )
};

export default ListItems;