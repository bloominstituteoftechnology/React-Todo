import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      task: ""
    };
  }

  handleInput = event => {
    this.setState({ task: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        list: prevState.list.concat({
          id: Date.now(),
          task: this.state.task,
          complete: false
        }), 
        task: "" 
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          value={this.state.task}
        />
        <TodoList list={this.state.list}/>
        <input type="submit" value="Clear" />
      </div>
    );
  }
}

export default App;

// <ul>{this.state.list.map(item => <li key={item}>{item}</li>)}</ul>
//App will contain a return with:

// <h1></h1>
// <TodoList />
// <TodoForm />

// TodoList.js will return:
// <ul>
// props.array.map(
// return (<Todo/>)
// )
// </ul>

// Todo.js will return:
// <li></li>
