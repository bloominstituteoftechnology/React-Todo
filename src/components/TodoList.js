// // // your components will all go in this `component` directory.
// // // feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) => {
  return (
    <div className='todo-list'>
      {props.tasks.map((task) => (
        <Todo toggComplete={props.toggComplete} key={task.id} task={task} />
      ))}
      <button className='clear-btn' onClick={props.clearCompleted}>
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default TodoList;

// import React from "react";

// import Todo from "./Todo";

// const List = (props) => {
//   return (
//     <div className='todo-list'>
//       {props.List.map((item) => (
//         <List toggleItem={props.toggleItem} key={item.id} item={item} />
//       ))}
//       <button className='clear-btn' onClick={props.clearPurchased}>
//         Clear Completed
//       </button>
//     </div>
//   );
// };

// export default List;

// // import React from "react";
// // import Todo from "./Todo";

// // const TodoList = (props) => {
// //   // console.log('TodoList.js', props)

// //   return (
// //     <div className='todo-list'>
// //       {props.todo.map((todo) => (
// //         <Todo key={todo.id} todo={todo} toggleItem={props.toggleItem} />
// //       ))}
// //     </div>
// //   );
// // };

// // export default TodoList;
