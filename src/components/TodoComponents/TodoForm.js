import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      task: '',
      addClick: props.addTask,
      clearClick: props.clearTasks
    };
  }

  onInputChange = e => {
    this.setState({task: e.target.value});
  };

  onAddClick = e => {
    e.preventDefault();
    if (e.detail === 0) return false;
    this.addTask();
    console.log('Clicked add todo');
  };

  onInputEnter = e => {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.addTask();
      console.log('Pressed enter');
    }
  };

  onClearClick = e => {
    e.preventDefault();
    console.log('Clicked clear completed');
  };

  addTask = () => {
    let val = this.state.task;
    if (val.trim().length > 0) {
      this.state.addClick(val);
      this.setState({task: ''});
    }
  };

  render() {
    return(
      <form>
        <input type="text" placeholder="Type your todo" onChange={this.onInputChange} onKeyUp={this.onInputEnter} value={this.state.task} />
        <button onClick={this.onAddClick}>Add Todo</button>
        <button onClick={this.onClearClick}>Clear Completed</button>
      </form>
    );
  }
  
}

export default TodoForm;