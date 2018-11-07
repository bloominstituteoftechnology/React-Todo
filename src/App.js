import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todoItems = [
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
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItemList: todoItems,
      inputText: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  }

  addTask = e => {
    e.preventDefault();
    this.setState({
      todoItemList: [
        ...this.state.todoItemList,
        {task: this.state.inputText, 
          id: Date.now(),
          completed: false
        },
      ],
      inputText: ''
    });
    console.log(this.todoItemList);
  }


  render() {
    return (
      <div>
        {/* <h2>Welcome to your Todo App!</h2> */}
        <TodoList todos={this.state.todoItemList} />
        <TodoForm 
          addTask={this.addTask}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
