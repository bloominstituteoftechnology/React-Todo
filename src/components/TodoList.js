import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
      taskId: 0
    };
  }
  handleOnChange = event => {
    this.setState({[event.target.name] : event.target.value});
  };
  addTodo = event => {
    event.preventDefault();

    const newTodoList = this.state.todos,
      newTaskId = this.state.taskId + 1;
    
    newTodoList.push({
      'task': this.state.newTodo,
      'id': newTaskId,
      'completed': false
    });

    this.setState({ todos: newTodoList, newTodo: '', taskId: newTaskId});
  };
  render(){
    return (
      <div>
        <form>
          <input
            name="newTodo"
            type="text"
            placeholder="Add a task"
            value={this.state.newTodo}
            onChange={this.handleOnChange}
          />
          <button onClick={this.addTodo}>Save task to list</button>
        </form>
        {this.state.todos.map(task => <Todo key={task.id} task={task.task}/>)}
      </div>
    );
  };
};

export default TodoList;