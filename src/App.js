import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      tasks: [
        {
          task: 'Organize room',
          id: 12343536,
          completed: false
        },
        {
          task: 'Clean Kitchen',
          id: 35935933425,
          completed: false
        }
      ],
      todo: ''
    };
  }

  addTask = e => {
    e.preventDefault()
    const tasks = this.state.tasks.slice();
    tasks.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ tasks, todo: ''});
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <h1> Todo List: MVP</h1>
        <TodoList tasks={this.state.tasks}/>
        <TodoForm
          value={this.state.todo}
          handleTodoChange = {this.changeTodo}
          addTask = {this.addTask}/>
      </div>
    );
  }
}

export default App;
