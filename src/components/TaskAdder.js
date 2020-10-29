import React from 'react';

import './Todo.css';
class TaskAdder extends React.Component {
 constructor(props) {
    super(props);
    this.state = { newTask: '' };
    }

changeHandler = event => this.setState({newTask: event.target.value});
handleSumbit = (e) =>{
    e.preventDefault()
    const final = {task: this.state.newTask, id: this.props.id, completed: false};
    this.props.updateId();
    this.props.addTask(final);
    this.setState({newTask: ''});
}
 
  render() {
    let id = 0;
    return (
      <form onSubmit = {this.handleSumbit}>
        <input type="text" onChange={this.changeHandler} value = {this.state.newTask} placeholder= '...todo'/>
        <button type='submit'>add</button>
      </form>
      
    );
  }
}

export default TaskAdder;
