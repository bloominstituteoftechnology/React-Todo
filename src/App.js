import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/TodoComponents/TodoList'
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
      inputTask: '',
      newTask: ''
    };
  }

  changeHandler = event => {
    console.log(event.target.name);
  };

  newTask = event => {
    event.preventDefault();
    console.log(event.target.name);
  };

  ClearCompleted = event => {
    event.preventDefault();
    console.log(event.target.name);
  };



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList taskData={this.state.taskData}/>
        <TodoForm/>
      </div>
    );
  }
  

}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
