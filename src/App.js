import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.testRef = React.createRef();
    this.state = {
      currentInputValue: '',
      todos : []
      };
      window.onbeforeunload = this.saveData;
  }

  componentDidMount(){
    const data = JSON.parse(localStorage.getItem('data'));

    if(data !== null) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('data'))
      })
    }
  };

  saveData = () => {
    localStorage.setItem('data', JSON.stringify(this.state.todos))
  };

  handleInput = (event) => {
    this.setState({
      currentInputValue: event.target.value
    });
  }

  handleSubmit = (event) => {

    if (this.state.currentInputValue === '') {
      alert('No Todo Item Entered')
    } else {
    let newTaskList = this.state.todos.concat({task: this.state.currentInputValue, key: Date.now(), completed: false, todoClass: 'incomplete'})
    this.setState({todos: newTaskList, currentInputValue: ''});
    console.log(this.state.todos);
    }
  }

  onKeyPress = (event) => {
    if(event.key === 'Enter') {
      this.handleSubmit();
    };
  };

  handleClear = (todoKey) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.key === todoKey) {
          return {
            task: todo.task,
            key: todo.key,
            completed: !todo.completed,
            todoClass: todo.todoClass === 'incomplete' ? 'complete' : 'incomplete'
            }
          } else {
            return todo
          }
      }),   
    })
    console.log(this.state.todos)
  };

  handleClearCompleted = (e) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false)
    });
    console.log(this.state.todos)
  }
    
  render() {
    return (
      <div className="container">
        <h1>Tasks Remaining {this.state.todos.length}</h1>
        <TodoList 
          list={this.state.todos} 
          handleClear={this.handleClear}
          todoClass={this.state.todoClass}
        />
        <TodoForm 
          inputFunction={this.handleInput} 
          submitFunction={this.handleSubmit} 
          enterFunction={this.onKeyPress} 
          inputValue={this.state.currentInputValue}
          clearComplete={this.handleClearCompleted}
        />
      </div>
    );
  }
}

export default App;
