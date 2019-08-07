import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import FormComponent from './components/TodoComponents/TodoForm';

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      taskList: todoList
    }
  }

  render() {
    console.log(this.state.taskList)
    return (
      <div>
        <div>
          <h2>Todo List: MVP</h2>
        </div>
        <TodoList list={this.state.taskList} />
        <FormComponent />
      </div>
    );
  }
}

export default App;
