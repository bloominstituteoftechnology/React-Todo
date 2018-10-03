import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoData: [
        {
          id: '1',
          task: 'Get data to render to screen',
          completed: false
        },
        {
          id: '2',
          task: 'map over data so all items in the array render',
          completed: false
        },
      ],

      inputTask: ''
    }
  }

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value });
  }

addNewTask = event => {
  event.preventDefault();
  this.setState({ 
    todoData: [
      ...this.state.todoData, 
      {task: this.state.inputTask}
    ],
    inputTask: ''
  })
}


  render() {
    return (
      <div>
        <TodoList 
        taskData={this.state.todoData}
        />
        <TodoForm 
        changeHandler={this.changeHandler}
        addNewTask={this.addNewTask}
        inputTask={this.state.inputTask}
        />
      </div>
    );
  }
}

export default App;



  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state