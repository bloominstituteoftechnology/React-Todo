// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import { Todo } from './Todo';

export const TodoList = props => {
  return (
    <ul>
      {
        props.todoTask.map((task, ind) => {
          return (
            <Todo
              key={ task.id }
              ID={ task.ID }
              todoTask={ task.task }
              taskCompleted={ task.completed }
              handleTaskCompletion={ props.handleTaskCompletion }
            />
          )
        })
      }
    </ul>
  );
};