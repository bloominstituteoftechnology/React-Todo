import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      input: '',
      tasks: [{
          task: 'Get some sleep',
          id: 123456789,
          completed: false
        },
        {
          task: 'Organize Garage',
          id: 234567891,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 345678901,
          completed: false
        },
        {
          task: 'Finish Project',
          id: 456789012,
          completed: false
        }
      ]
    }
  }


  keypressHandler = event => {
    const obj = {
      task: this.state.input,
      id: Date.now(),
      completed: false
    }
    if (event.key === 'Enter') {
      this.setState({
        tasks: [...this.state.tasks, obj],
        input: ''
      });
    }
  }

  changeHandler = event => {
    const value = event.target.value;
    this.setState({
      input: value,
    })
  }
  clickHandler = (event, item) => {
    event.preventDefault();
    if (event.target.classList.contains('strikethrough')) {
      event.target.classList.remove('strikethrough')
    } else {
      event.target.classList.add('strikethrough');
    }
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(task.task === item) {
          return {
            task: task.task,
            id: task.id,
            completed: !task.completed
          }
        } else return task;
      })
    })
  }

  submitHandler = () => {
    const obj = {
      task: this.state.input,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, obj],
      input: ''
    });

  }

  clearHandler = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => {
      return task.completed === false
      })
    })
    document.querySelectorAll('li').forEach(item => item.classList.remove('strikethrough'))
  }

  render() {
    return <div>
        <h2>React To Do List</h2>
        <TodoList tasks={this.state.tasks} clickHandler={this.clickHandler} />
        <TodoForm 
        keypressHandler={this.keypressHandler}
        changeHandler={this.changeHandler} 
        input={this.state.input} 
        clearHandler={this.clearHandler}
        submitHandler={this.submitHandler}/>
      </div>;
  }
}

export default App;