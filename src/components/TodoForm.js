import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoText: ''
    }
    // this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange = (e) => {
    this.setState({todoText:e.target.value})
  }

  handleClick = (e) => {
    e.preventDefault();
    this.state.todoText.trim() && this.props.submit(this.state.todoText.trim());
    this.setState({todoText:''})
  }
  
  handleFilter = (e) => {
    e.preventDefault();
    this.props.filterCompleted();
  }

  render() {
    return(
      <div>
        <form>
          <input
            type='text'
            name='todoText'
            value={this.state.todoText}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Add Task</button>
          <button onClick={this.handleFilter}>Clear Finished Tasks</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;