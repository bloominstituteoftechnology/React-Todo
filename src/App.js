import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoList: [
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
      ],
      taskText: '',
    }
  }

  handleChange = e => {
    this.setState({
      taskText: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        {task: this.state.taskText, completed: false, id: Date.now()}
      ],
      taskText: ''
    })
  }

  toggleCompleted = (e,id) => {
    e.target.classList.toggle('completed');
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          }
        }else {
          return todo
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(todo => {
        if(!todo.completed){
          return todo
        }
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList 
        todoList={this.state.todoList}
        toggleCompleted={this.toggleCompleted}
        />
        <TodoForm 
        handleChange={this.handleChange} 
        taskText={this.state.taskText}
        handleSubmit={this.handleSubmit}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
