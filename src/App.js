import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
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
      ]
    };
  }

  enterPressed = event => {
    if(event.which === 13) {
      console.log(event.target.value);
      this.setState({
        todoList: this.state.todoList.concat({
          task: event.target.value,
          id: Date.now(),
          completed: false
        }) 
      });
    }
  }

  handleSubmit = event => {
    this.setState({
      task: event.target.value,
      id: Date.now(),
      completed: false
    });
  }

  render() {
    return (
      <div>
        <TodoList todoList={this.state.todoList} handleSubmit={this.handleSubmit} enterPressed={this.enterPressed}/>
      </div>
    );
  }
}

export default App;
