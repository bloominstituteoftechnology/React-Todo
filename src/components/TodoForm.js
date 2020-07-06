import React from "react";

class TodoForm extends React.Component {
    constructor() {
      super();
      //manage state of inputs here. Make sure to add value/onChange to input attr
      this.state = {
        todo: ""
      };
    }
  
    //Todo Form Handlers
    handleChanges = (e) => {
      //update state with each keystroke
      this.setState({
        todo: e.target.value,
      });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addTaskFn(this.state.todo);
  
      //to clear input after add
      this.setState({
        todo: "",
      });
    };
  
    render() {
  
      const { clearTodoFn } = this.props
      return (
          <div className="form-div">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            value={this.state.todo}
            onChange={this.handleChanges}
          />
          <button type="submit">Add</button>
          <button onClick={clearTodoFn}>Clear</button>
        </form>
        </div>
      );
    }
  }
  export default TodoForm;
  