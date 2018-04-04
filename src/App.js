import React from 'react';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todoList: ['Task 1', 'Task 2']
    };
  }

  handleSubmitTodo = () => {
    const { todoList } = this.state;
    todoList.push(this.state.newTodo);
    this.setState({ todoList, newTodo: '' });
  }

  handleAddTodo = e => {
    this.setState({ [e.target.name] : e.target.value });
  }

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoList todoList={this.state.todoList}/>
        <input
          type="text"
          name="newTodo"
          value={this.state.newTodo}
          placeholder="add animal"
          onChange={this.handleAddTodo}
        />
        <button onClick={this.handleSubmitTodo}>Add Todo</button>
      </div>
    );
  }
}

export default App;
