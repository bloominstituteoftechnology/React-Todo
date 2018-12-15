// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo';

const TodoList = props => {
  const filteredSearch = props.tasks.filter(
    (task) => {
      return task.task.toLowerCase().indexOf(props.search.toLowerCase()) !== -1;
    }
  );

  return (
    <div
      className="TodoListContainer"
      onDrop ={(e) => props.onDrop(e)}
      onDragOver={(e) => props.onDragOver(e)}
      >
      {filteredSearch.map(task => (
        <Todo
          onDragStart = {props.onDragStart}
          onDragOver = {props.onDrop}
          toggleCompleteTask = {props.toggleCompleteTask}
          className="TodoList"
          key={task.id}
          taskName = {task}
          />
      ))}
    </div>
  );
};


export default TodoList;
