import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      todoData: [
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
      newTask: ''
    }
  }

changeHandler = event => {
  this.setState({ [event.target.name]: event.target.value });
};


addNewTodo = event => {
  event.preventDefault();
  this.setState({
    todoData :[
      ...this.state.todoData,
      { task : this.state.newTask }
    ],
    newTask: ''
  });
};

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          addNewTodo={this.addNewTodo}
          changeHandler={this.changeHandler}
          newTask={this.state.newTask}
          />
      </div>
    );
  }
}

export default App;
