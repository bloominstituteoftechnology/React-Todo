import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todos: [
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
      todo: ''
    }
  }

  addHandler = (e) => {
    const arr = this.state.todo.slice();
    let input = document.getElementById("inputBtn").value;

    arr.push(
      {
        task: input,
        id: Date.now(),
        completed: false
      }
    );
    this.setState({todos: arr});
    document.getElementById("inputBtn").value = null;

  }
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
  render() {
    return (
      <div>
        <TodoList arr={this.state.todos} />
        <TodoForm add={this.addHandler} />
      </div>
    );
  };
};

export default App;
