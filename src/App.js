import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props)

    this.state = {
       stateTodos: [
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
      newTodo: ''
    };
  }


  changeHandler = event => {
    console.log(event.target.value)
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      stateTodos: [...this.state.stateTodos, {task: this.state.newTodo}], newTodo: ''
    })
  }
  
  render() {

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todosProps={this.state.stateTodos} />
        <TodoForm addTodo={this.changeHandler} 
                  newTodo={this.state.newTodo}
                  addNewTodo={this.addNewTodo}
                  />
      </div>
    );
  }
}



export default App;
