import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoData: [
        {
          task: 'Learn React',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Practice JS',
          id: 1528817084358,
          completed: false
        }
      ],
      inputText: '',
      newTodo: '',
      completed: false,
    }
  }

  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      TodoData: [
        ...this.state.TodoData,
        { task: this.state.newTodo, id: Date.now(), completed: this.state.completed }
      ],
      newTodo: ''
    });
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleCompleted = index => {
    this.setState({
      TodoData: this.state.TodoData.map((task) => {
        if (index !== task.id) {
          return task;
        } else {
          return {
            ...task,
            completed: task.completed === false ? true : false
          }
        }
      })
    })
  }

  clearTodo = event => {
    event.preventDefault();
    let todos = this.state.TodoData
    console.log(todos)
    todos = todos.filter(todo => !todo.completed);
    console.log(todos)
    this.setState({ TodoData: todos });
  };


  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList 
          todoData={this.state.TodoData}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm 
          addNewTodo={this.addNewTodo}
          changeHandler={this.changeHandler}
          inputText={this.state.inputText}
          todoData={this.state.TodoData}
          newTodo={this.state.newTodo}
          clear={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
