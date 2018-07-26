import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

// const TodoForm = (props) => {
//   return (
//     <form>
//       <input placeholder="...todo" onChange={props.messageProp} onSubmit={props.buttonProp} />
//       <button onClick={props.buttonProp}>Add Todo</button>
//       <button>Clear Completed</button>
//     </form>
//   );
// }

// const TodoList = props => {
//   return <div>{props.toDoListProp.map(todo => <Todo key={todo.id} toDoProp={todo} />)}</div>;
// }

// const Todo = props => {
//   const { task } = props.toDoProp
//   return <div>{task}</div>;
// }


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      message: ""
    };
  }

  handleUpdateState = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({
      task: this.state.message,
      id: Date.now(),
      completed: false
    });
    this.setState({ todos: todos });
  }



  handleInputChange = event => {
    this.setState({ message: event.target.value });
  }



  render() {
    return (
      <div>
        <h2>Kyle's Todo List</h2>
        {/* <h2>Test: {this.state.message}</h2> */}
        <TodoList toDoListProp={this.state.todos} />
        <TodoForm buttonProp={this.handleUpdateState} messageProp={this.handleInputChange} />
      </div>
    );
  }
}

export default App;
