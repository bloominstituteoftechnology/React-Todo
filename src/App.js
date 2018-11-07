import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


const taskListArray = [
  { taskName: 'Clean the bathroom', id: 1528817077286, completed: false },
  { taskName: 'Practice coding', id: 1528817084358, completed: false}
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: taskListArray,
      inputText: '',
    };
  }

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
    console.log(event.target.name);
  };

  render() {
    return (
      <div className="App">
        <TodoList tasksList={this.state.tasks} />
        <TodoForm 
          inputText={this.state.inputText} 
          handleChange={this.handleChange} 
        />
      </div>
    );
  }
}

export default App;
