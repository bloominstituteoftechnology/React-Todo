import React from "react";
import Styled from "styled-components"

const Todostyle = Styled.div`
 display: flex;
 justify-content: center;
 
`

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      taskName: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      taskName: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.taskName !== "") {
      this.props.addTask(this.state.taskName);
      this.setState({
        taskName: ""
      });
    }
  };

  render() {
    console.log("rendering form");
    return (
        
        <form className="shopform" onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <Todostyle>
        <input
          onChange={this.handleChanges}
          type="text"
          name="task"
          value={this.state.taskName}
        />
        
        <button className="shopsub">Submit</button>
        </Todostyle>
      </form>
      
      
    );
  }
}

export default TodoForm;