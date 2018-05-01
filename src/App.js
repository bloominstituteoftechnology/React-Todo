import React from 'react';
import TodoList from "./components/TodoList";

/*const App = () => (
  <div>
    <h2>Todo App</h2>
  </div>
);
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      title:"Things To Do",
      todos: [],
      newTodo: ""
    };
  }

  handleSubmitTodo = () => {
    const newTodos = this.state.todos;
    newTodos.push(this.state.newTodo);
    this.setState({ todos: newTodos, newTodo: "" });
  };

  handleNewTodo = event => {
    this.setState({ newTodo: event.target.value });
  };

  render () {
    console.log("rendering");
    return (
      <div>
	<input
	  name="newTodo"
	  onChange={this.handleNewTodo}
	  value={this.state.NewTodo}
	  placeholder="add todo here"
	/>
      </div>
    );
  };
};
      
      
export default App;
