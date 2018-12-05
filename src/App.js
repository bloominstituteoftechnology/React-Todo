import React from "react";
import ReactDOM from "react-dom";
//import "./styles.css";

const todoArr = [
  {
    id: 1528817077286,
    task: "Organize Garage",
    completed: false
  },
  {
    id: 1528817084358,
    task: "Clean Room",
    completed: false
  }
];

const MessageRenderer = props => {
  return <h1>{props.propsMessage}</h1>;
};

const Todo = props => {
  const { task } = props.todoProp;
  return (
    <div>
      <p>{task}</p>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoArr,
      task: ""
    };
  }

  handleUpdateState = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    // clone our state todos array.
    todos.push({
      id: new Date(),
      task: this.state.task,
      completed: false
    });
    // push our new todo item into the todos array.
    this.setState({ todos: todos });
  };

  handleInputChange = event => {
    // update the message field on state.
    this.setState({ [event.target.name]: event.target.value });
    
  };

  render() {
    return (
      <div>
        {this.state.todos.map((todo, i) => <Todo todoProp={todo} />)}
        <form onSubmit={this.handleUpdateState}>
          <button>Click to Add 2</button>
          <input name="task" value={this.state.task} placeholder="capture" onChange={this.handleInputChange} />
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;
