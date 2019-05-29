import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
const exampleData = [
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
  constructor(props) {
    super(props);
    this.state = {
      todos: exampleData,
      todoInput: "",
    }
  }

  onInputChange = (e) => {
    this.setState({ todoInput: e.target.value });
  }

  render() {
    return (
      <div>
        <TodoList todoList={exampleData} />
        <TodoForm value={this.state.todoInput} inputEvent={this.onInputChange}/>
      </div>
    );
  }
}

export default App;
