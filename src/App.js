import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';


const taskListArray = [
  { taskName: 'Clean the bathroom', id: 1528817077286, completed: false },
  { taskName: 'Practice coding', id: 1528817084358, completed: false}
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: taskListArray
    };
  }

  render() {
    return (
      <div className="App">
        <TodoList tasksList={this.state.tasks} />
      </div>
    );
  }
}

export default App;
