import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      taskList: [
        {
          task: 'Anything',
          id: Date.now(),
          completed: false
        }
      ],
      currentTask: ''
    }
}

handleSubmit = event => {
  let newList = this.state.taskList.slice();

  if (this.state.currentTask === '') {
    return;
  } else {
    let newObject = {
      task: this.state.currentTask,
      id: Date.now(),
      completed: false
    }
    newList.push(newObject);
    this.setState({taskList: newList});
  };
};

handleEventChange = event => {
  this.setState({currentTask: event.target.value});
};

handleEventFinish = currentId => {
  let newList = this.state.taskList.slice();
  newList = newList.map(task => {
    if (currentId === task.id) {
      task.completed = !task.completed;
      return task;
    } else {
      return task;
    }
  });

  this.setState({taskList: newList});
  console.log(this.state.taskList);
}

handleClearCompleted = event => {
  event.preventDefault();
  let todoList = this.state.taskList.slice();
  let newTodoList = todoList.filter(todo => todo.completed === false);
  this.setState({taskList: newTodoList});
  this.setState({taskList: newTodoList});

}



  render() {
    return (
      <div>
        <TodoList 
          taskList={this.state.taskList}
          handleEventFinish={this.handleEventFinish}
        />

        <TodoForm 
          handleEventChange={this.handleEventChange}
          handleSubmit={this.handleSubmit}
          handleClear={this.handleClearCompleted}
        />
      </div>
    );
  }
}

export default App;
