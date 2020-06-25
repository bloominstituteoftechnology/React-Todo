import React from "react";
import doing from "../assets/doing.mp3"





class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      thingTodo: ""
      
    };
  }
  
  
  handleChanges = e => {
    this.setState({
      thingTodo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.thingTodo);
    this.setState({
      thingTodo: ""
    });
  };
  render() {
    const audio = new Audio(doing)
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className='entry'
          type="text"
          name="thingTodo"
          value={this.state.thingTodo}
          onChange={this.handleChanges}
          placeholder='Job need doing?'
        />
        <button className='button todo' onClick={() => audio.play()}>Add Job</button>
      </form>
    );
  }
}

export default TodoForm;
