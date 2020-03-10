import React from "react";






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
    const audio = new Audio('../assets/doing.mp3')
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="thingTodo"
          value={this.state.thingTodo}
          onChange={this.handleChanges}
          placeholder='what to do?'
        />
        <button onClick={() => audio.play()}>To-Do</button>
      </form>
    );
  }
}

export default TodoForm;
