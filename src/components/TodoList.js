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
  updateTask = event => {
    const newTodoList = this.state.todos.map(task => {
      if (+task.id === +event.target.getAttribute('todoid')) task.completed = !task.completed;
      return task;
    });

    this.setState({todos: newTodoList});
  }
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
        {this.state.todos.map(task =>
          <Todo
            key={task.id}
            todoid={task.id}
            todo={task.task}
            completed={task.completed}
            onClick={this.updateTask}
          />
        )}
      </div>
    );
  };
};

export default TodoList;