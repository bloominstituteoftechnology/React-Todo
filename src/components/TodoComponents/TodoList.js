// your components will all go in this `component` directory.
import React from "react";
import Todo from "./Todo";
import './Todo.css'

const TodoList = props => {
  return (
    <div className = 'list-container'>
      {props.taskData.map(item => (
        <Todo 
          task={item.task} 
        />
      ))}
    </div>
  );
};

export default TodoList;

// const TodoList = props => {
//   return(
//     <div className="list-container">
//       {props.todoData.map(todo => (
//         <Todo
//           task={todo.task}
//           id={todo.id}
//           key={todo.id}
//           completed={todo.completed}
//           toggleComplete={props.toggleComplete}
//         />
//       ))}
//     </div>
//   );
// }
