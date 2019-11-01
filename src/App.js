import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const data = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    },
    {
      task: 'Wash Car',
      id: 1528817045614,
      completed: false
    },
    {
      task: 'Doing Laundry',
      id: 1528817078945,
      completed: false
    }
  ];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      jobs: data,
    };
    this.toggleCompleted = this.toggleCompleted(this);
  }


  toggleCompleted(itemId) {
    console.log("toggleCompleted: ", itemId);

    this.setState({
      jobs: this.state.jobs.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  }

  clearCompleted = () => {
    console.log("clearCompleted");
    this.setState({
      jobs: this.state.jobs.filter(item => {
        return !item.completed;
      })
    });
  };

  addItem = itemName => {
    console.log("add jobs: ", itemName);

    this.setState({
      jobs: [
        ...this.state.jobs,
        {
          task: itemName,
          id: Date.now(),
          completed: false
        }
      ]
    });

  };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to Your Todo List App</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          jobs={this.state.jobs}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
