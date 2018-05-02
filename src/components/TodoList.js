// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// import React from "react";


// const ToDoList = props => {
//   return (
//     <ul>
//       {props.allToDos.map((toDo, i) => {
//         return (
//           <li key={toDo.id} 
//             // onClick={props.clicked}
//             >{toDo.item}
//           </li>
//         );
//       })}  
//     </ul>
//   )
// }

// export default ToDoList;

import React from "react";

const TodoList = props => {
  const remove = obj => { 
    props.removeTodo(obj.id);
  };

  return (
    <div>
      {props.todoList.map(todo => {
        return (
          <div
            style={todo.completed ? { textDecoration: "line-through" } : null}
            key={todo.title + todo.id}
          >
            {todo.title}
            <button
              onClick={() => {
                remove(todo);
              }}
            >
              Complete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;