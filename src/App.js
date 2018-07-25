import React from 'react';


const myArr = [
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

const TodoForm = (props) => {
  return (
    <div>
      <input placeholder="...todo" onChange= {props.messageProp} />
      <button onClick={props.buttonProp}>Add Todo</button>
      <button>Clear Completed</button>
    </div>
  );
}

const TodoList = props => {
  return <div>{props.toDoListProp.map(todo => <Todo toDoProp={todo} />)}</div>;
}

const Todo = props => {
  const { task } = props.toDoProp
  return <div>{task}</div>;
}


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: myArr,
      message: "yo"
    };
  }

  handleUpdateState = () => {
    const todos = this.state.todos.slice();
    todos.push({
      task: 'Vacuum House',
      id: Date.now(),
      completed: false
    });
    this.setState({ todos: todos });
  }

  handleInputChange = event => {
    this.setState({ message: event.target.value });
  }

  render() {
    console.log("STATE: ", this.state);
    return (
      <div>
        <h2>Kyle's Todo List</h2>
        <h2>Test: {this.state.message}</h2>
        <TodoList toDoListProp={this.state.todos} />
        <TodoForm buttonProp = {this.handleUpdateState} messageProp={this.handleInputChange}/>
      </div>
    );
  }
}

export default App;
