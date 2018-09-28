import React from 'react';
import './Todo.css';

// const Todo = props => {
//   let completed = 'completed';
//   if (!props.completed) {
//     completed = '';
//   }
//   return (
//     <div
//       className={completed}
//       key={props.id}
//       id={props.id}
//       onClick={props.toggleComplete}
//     >
//       {props.text}
//     </div>
//   );
// };

class Todo extends React.Component {
  render() {
    let completed = 'completed';
    if (!this.props.completed) {
      completed = '';
    }
    return (
      <div
        className={completed}
        key={this.props.id}
        id={this.props.id}
        onClick={this.props.toggleComplete}
      >
        {this.props.text}
      </div>
    );
  }
}

export default Todo;
