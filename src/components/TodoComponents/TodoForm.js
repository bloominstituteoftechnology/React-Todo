import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Add a task!"
      />
      <button onClick={props.handleAddTodo}>Add Todo</button>
      <button onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;



// import "./Todo.css";
// import React from 'react';

// //ccr: class, constructor, render
// const TodoForm = props => {
//     return (
//         <div className="form">
//             <input
//             type="text"
//             placeholder="Enter todo item"
//             value={props.value}
//             onChange={props.handleChange}
//             onKeyPress={(event) => {
//                 if (event.key === "Enter") {
//                     props.addTodo();
//                 }
//             }}
//             />
//             <div className="button" onClick={props.addTodo}>
//                 add
//             </div>
//             <div className="button" onClick={props.clearCompleted}>
//                 Clear Completed
//             </div>
//         </div>
//     );
// };

// export default TodoForm;