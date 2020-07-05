import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  render() {
    return (
      <div className="todoFormContainer">
        <form onSubmit={(e) => this.submitTodo(e)}>
          <input id='addTodoInput'onChange={(e) => this.updateInput(e)} type="text"></input>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }

  updateInput = (e) => {
    // console.log(e);
    this.setState({ todo: e.target.value });
  };

  submitTodo = (e) => {
    e.preventDefault();
    // console.log('submit', this.state)
    this.props.addTodoFn(this.state.todo);
    //this will empty input after submit
    document.getElementById('addTodoInput').value= '';
  };
}

// const TodoForm = props =>
// <form onSubmit={props.propsAddItem}>
//     {/* if you ever want to access what is being entered on the input element the "ref" will allow this */}
//     <input type="text" placeholder="Enter New Task"></input>
//     <button type="submit">Add Task</button>
//     <button type="reset">Clear Task</button>
// </form>

export default TodoForm;
