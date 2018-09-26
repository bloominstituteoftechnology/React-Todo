// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo'


const ListItems = (props) => {

  return (
    <ul>
      {props.myTodoList.map(newItem => {
        return (
            <ToDo
              key = {newItem.id}
              value = {newItem.task}
              className = {newItem.completed}
            />

        )

      }) }

    </ul>
  )
};

export default ListItems;