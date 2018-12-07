// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo';

const TodoList = props => {
  console.log(props)
  const filteredSearch = props.tasks.filter(
    (task) => {
      return task.task.toLowerCase().indexOf(props.search.toLowerCase()) !=- 1;
    }
  );
  // const filteredSearch = props.tasks.filter(
  //   (task) => {
  //     return task.task.indexOf(props.search) !== -1;
  //   }
  // )
  return (
    <div className="TodoListContainer">
      {filteredSearch.map(task => (
        <Todo
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
