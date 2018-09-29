import React from 'react';
import './TodoForm.css';

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
          placeholder="Type Todo here"
          onChange={this.props.handleInput}
          value={this.props.textField}
        />
        <div className="formBtns">
          <button onClick={this.props.addNew}>Add Todo</button>
          <button onClick={this.props.clearTodos}>Clear Completed</button>
        </div>
      </form>
    );
  }
}

export default TodoForm;
