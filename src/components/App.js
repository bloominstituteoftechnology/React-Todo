import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const todos = [
  {
    id: 1,
    todo: "walk the dog",
    done: false,
  },
  { id: 2, todo: "take out trash", done: false },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    //initialize state inside constructor:
    //state is object, need this keyword since it's a class property
    this.state = {
      todos: todos,
    };
    //class state vs function state:
    //state in class component is ALWAYS an object with class properties
    //function state, each state property is its own variable
    //ie const [variable, setVariable] = useState(variable)
  }

  handleAdd = (todo) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          todo: todo,
          id: Date.now(),
          done: false,
        },
      ],
    });
  };

  handleToggle = (itemId) => {
    const newTodos = this.state.todos.map((item) => {
      if (itemId === item.id) {
        return { ...item, done: !item.done };
      } else {
        return item;
      }
    });
    this.setState({ todos: newTodos });
  };

  handleDone = () => {
    this.setState({ todos: this.state.todos.filter((item) => !item.done) });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAdd={this.handleAdd} />
        <TodoList
          handleDone={this.handleDone}
          todos={this.state.todos}
          handleToggle={this.handleToggle}
        />
      </div>
    );
  }
}

export default App;
