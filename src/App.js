import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'

const toDos = [{
  task: '',
  id:'',
  completed: false,
}]



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state\
  constructor() {
    super();
    this.state = {
      toDos: toDos,
    };
  }
  addList = taskName => {
    const newTodo = {
      name: taskName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      toDos: [...this.state.toDos, newTodo]
    })
  }

  toggleTask = taskId =>{
    this.setState({
      todoList: this.state.toDos.map(task => {
        if(task.id === taskId){
          return {
            ...task,
            completed: !task.completed
          };
        }else {
          return task;
        }
      })
    })
  }

  clearCompleted= () => {
    this.setState ({
      todoList: this.state.toDos.filter(task => !task.completed)
    })
  }

    render() {
    return (
      <div className="app-container">
        <h2> To Do List:</h2>
        <TodoForm
          addList={this.addList}
          />
          <div>
            <TodoList
              toDos={this.state.toDos}
              toggleTask={this.toggleTask}
              clearCompleted={this.clearCompleted}
              />
          </div>
      </div>
    );
  }
}

export default App;
