import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      list: [
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
      inputText: ''
    }
  }

  // design `App` to be the parent component of your application.
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  toggleTaskComplete = e => {
    this.state.list[0].completed = !this.state.list[0].completed;
  }

  addTask = e => {
    e.preventDefault();
    this.setState({
      list: [
          ...this.state.list,
          {
            task: this.state.inputText,
            id: Date.now(),
            completed: false
          }
      ],
      inputText: ''
    });
  }

  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList list={this.state.list} toggleTaskComplete={this.toggleTaskComplete} />
        <TodoForm 
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          addTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;
