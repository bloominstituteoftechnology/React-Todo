import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddItem(this.state.input);
    this.state.input = "";
  };

  handleClearTasks = e => {
        e.preventDefault();
        console.log('sup1')
        this.props.handleClearTasks();
  }

  render() {
    return (
      <div className='main'>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            onChange={this.handleChanges}
            type='text'
            name='taskInput'
            placeholder='What to do?'
          />
          <button className='submit'>Add</button>
        </form>
        <form>
            <button className='clear' onClick={this.handleClearTasks}>Clear</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;