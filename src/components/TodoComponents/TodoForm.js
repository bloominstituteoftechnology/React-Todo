import React from 'react';

// const TodoForm = props => {
//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="...Todo"
//         onChange={props.handleInput}
//         value={props.textField}
//       />
//       <button onClick={props.addNew}>Add Todo</button>
//       <button onClick={props.clearTodos}>Clear Completed</button>
//     </form>
//   );
// };

class TodoForm extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="...Todo"
          onChange={this.props.handleInput}
          value={this.props.textField}
        />
        <button onClick={this.props.addNew}>Add Todo</button>
        <button onClick={this.props.clearTodos}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
