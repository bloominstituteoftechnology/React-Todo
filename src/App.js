import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./components/Todo.css"
const data = [
  {
    task: 'Learn Python',
    id: Date.now(),
    completed:false
  }
]
class App extends React.Component {
  // state
  constructor(){
    super();
    this.state = {
      data:data
    }
  }
  //methods

  //update state
  toggleTask = (todoId) => {
    this.setState({
      data: this.state.data.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !data.completed
          }
        }
        return todo;
      })
    })
  }

  //method to clear completed task 
  clearTask = () => {
    this.setState({
      data: this.state.data.filter((todo) => {
        return !todo.completed;
      })
    })
  }

  //method to add an item
  /*addTask = (taskName) => {
    this.setState({
      data: [
        ...this.state.data,
        {id:Date.now(), name: taskName, completed: false}
      ]
    })
  }*/
  addTask = (taskName) => {
    this.setState({
      data: [
        ...this.state.data,
        { id: Date.now(), task: taskName, completed: false }
      ]
    });
  };
  render() {
    return (
      <div>
        <header>
        <h2>Todo List</h2>
        </header>
        <main>
        <TodoList
          data = {this.state.data}
          toggleTask = {this.toggleTask}
          clearTask = {this.clearTask}
          />
        </main>
        <div>
        <TodoForm addTask={this.addTask} />
        </div>
      </div>
    );
  }
}

export default App;
