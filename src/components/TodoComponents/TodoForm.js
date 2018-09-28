import React from 'react';
import './Todo.css';


class TodoForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      controller: props.controller
    };
  }

  render() {
    return (
      <div className="todo-form">
        <input onFocus={this.state.controller.focusHandler}
               onBlur={this.state.controller.blurHandler}
               onChange={this.state.controller.inputHandler}
               value={this.state.controller.state.inputValue} />
        <div className='button-holder'>
            <button onClick={this.state.controller.addHandler}>Add Todo</button>
            <button onClick={this.state.controller.clearHandler}>Clear Completed</button>
        </div>
      </div>
    );
  }
}

export default TodoForm;
