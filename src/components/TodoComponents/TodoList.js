// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

// Basic Structure:
// const TodoList = props => {
//     return (
//         <div>
//             {props.blahblah.map()}
//         </div>
//     )
// }

//passing props
//mapping over todos from state on app
//returning the new array
//placing and returning the toggle handler on <Todo />
const TodoList = props => {
    return (
        <div>
          {props.todos.map(todo => (
            <Todo handleToggleComplete={props.handleToggleComplete}
              key={todo.id}
              todo={todo}
            />
          ))}
        </div>
      );
}



export default TodoList;