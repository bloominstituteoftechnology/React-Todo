import React from "react";

const Todo = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;



// import React from 'react';

// const Todo = (props) => {
//     let classComp = `todo-item`;
//     if (props.completed) {
//         classComp = `classComp completed`;
//     }
//     return (
//         // <div id={props.id} className={classComp} onClick={props.todoClick}>
//         // </div>
        
//         <div
//         style={props.todo.completed ? {textDecoration: "line-through" } : null}
//         onClick={() => props.handleToggleComplete(props.todo.id)}
//         >
//             <h2>{props.todo.task}</h2>
//         </div>
//     );  
// };

// export default Todo;

// // two controls; one for linethrough, another for clear linethrough
