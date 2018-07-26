import React from "react";

// import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const myArr = [
  {
    task: "Organize Garage",
    id: Date.now(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: myArr,
      todo: ""
    };
  }

  handleUpdateState = (event) => {
    event.preventDefault();
    const todoData = this.state.todoData.slice();
    // clone our state todoData array.
    todoData.push({
      task: this.state.todo,
      id: Date.now(),
      completed: false
    });
    // push our new animal item into the todoData array.
    this.setState({ todoData, todo: '' });

    // FROM REACT API the ONLY way to change state.
  };

  handleInputChange = event => {
    // update the message field on state.
    this.setState({ [event.target.name]: event.target.value });
    
  };

  render() {
    console.log("STATE: ", this.state);
    return (
      <div>
        <TodoList todoArray={this.state.todoData} />
        {/* {this.state.todoData.map(task => <Todo todoDataProp={task} />)} */}
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.handleInputChange}
          handleAddTodo={this.handleUpdateState}
        />
      </div>
    );
  }
}

export default App;
