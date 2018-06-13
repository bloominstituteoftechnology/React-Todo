import React from 'react';
import Todo from './Todo';

// class TodoList extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       todos: props.todos
//     };
//   }

//   render() {
//     return(
//       <ul>
//         {this.state.todos.map(todo => {
//           return <Todo task={todo.task} key={todo.id} id={todo.id} isCompleted={todo.completed} />;
//         })}
//       </ul>
//     );
//   }
// }

const TodoList = props => {
  return(
    <ul>
      {props.todos.map(todo => {
        return <Todo task={todo.task} key={todo.id} id={todo.id} isCompleted={todo.completed} setCompletedState={props.setCompletedState}/>;
      })}
    </ul>
  );
};

export default TodoList;