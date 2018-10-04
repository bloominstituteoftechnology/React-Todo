import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(props) {
    super(props);
    this.state = {
      taskData: [
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

  AddTodoHandler = event => {
    console.log(event.target.name);
    console.log('hello');
  };

  addNewTodo = event => {
    event.preventDefault();
    console.log(event.target.name);
    console.log('hello');
  };

  // addNewTodo = event => {
  //   event.preventDefault();

  //   const todoData = this.state.todoData.slice();
  //   if (this.state.newTodo !== '' && this.state.todoData.length < 6) {
  //     todoData.push(
  //       {
  //         task: this.state.newTodo,
  //         id: Date.now(),
  //         completed: false
  //       }
  //     );
  //   }


  toggleComplete = event => {
    event.preventDefault();
    console.log(event.target.name);
    console.log('hello');
  };



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList taskData={this.state.taskData}/>
        <TodoForm
          // input field
          inputTodo={this.state.newTodo}
          changeInput={this.changeHandler}
          newTodo={this.state.newTodo}

          // Add Todo button
          addNewTodo={this.addNewTodo}
        />
      </div>
    );
  }
  

}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
