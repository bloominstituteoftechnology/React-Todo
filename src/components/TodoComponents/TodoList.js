import React from 'react';
import './Todo.css';

import TodoNote from './Todo';

function TodoList(props) {
  return (
    <div className="listContainer">
      {props.todos.map(todo => {
        return <TodoNote 
        todo={todo}
        key={todo.id} 
        toggleCompleted={props.toggleCompleted} />;
      })}
    </div>
  );
}

export default TodoList;

// import React from 'react';

// import Todo from './Todo';

// function TodoList(props) {
//   return (
//     <div>
//       {props.todos.map(todo => {
//         return <Todo toDo={todo} 
//         toggleDone={props.toggleDone} />;
//       })}
//     </div>
//   );
// }

// export default TodoList;