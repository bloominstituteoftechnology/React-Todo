import React from "react";

class TodoForm extends React.Component {

   
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  render() { 
      
    const { clearTodoFn } = this.props

    return (
      <div className="todoFormContainer">
        <form onSubmit={(e) => this.submitTodo(e)}>
          <input id='addTodoInput' onChange={(e) => this.updateInput(e)}  type="text"></input>
          <button type="submit">Add Todo</button>
          <button onClick={clearTodoFn}type='reset' >Clear Completed</button>
        </form>
      </div>
    );
  }

 // 
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




export default TodoForm;
