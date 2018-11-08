import React from "react";
import "../src/App.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoItems = [
  {
    task: "eat lunch",
    id: 1,
    completed: false
  },
  {
    task: "punch a baby",
    id: 2,
    completed: false
  },
  {
    task: "defenestrate my enemies",
    id: 3,
    completed: false
  },
  {
    task: "eat tendies",
    id: 4,
    completed: false
  },
  {
    task: "redeem GBPs",
    id: 5,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todoItems,
      inputText: ""
    };
  }

  componentDidMount() {
    this.fillStateWithLocalStorage();
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    this.saveStateToLocalStorage();
  }

  fillStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodo = ev => {
    ev.preventDefault();
    if (this.state.inputText === "") {
      return alert("Please write your todo item!");
    }
    this.setState({
      todo: [
        ...this.state.todo,
        {
          task: this.state.inputText,
          id: Date.now(),
          completed: false
        }
      ],
      inputText: ""
    });
    if (this.state.filter) {
      this.setState({
        filter: [
          ...this.state.filter,
          {
            task: this.state.inputText,
            id: Date.now(),
            completed: false
          }
        ]
      });
    }
  };

  markCompleted = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return { ...item, completed: item.completed ? false : true };
        } else {
          return item;
        }
      }),
      filter: this.state.filter.map(item => {
        if (item.id === id) {
          return { ...item, completed: item.completed ? false : true };
        } else {
          return item;
        }
      })
    });
  };

  clearHandler = ev => {
    ev.preventDefault();
    this.setState({
      todo: [...this.state.todo.filter(item => !item.completed)],
      filter: [...this.state.filter.filter(item => !item.completed)]
    });
  };

  filterList = ev => {
    var updatedList = this.state.todo;
    updatedList = updatedList.filter(item => {
      return (
        item.task.toLowerCase().search(ev.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ filter: updatedList });
  };

  render() {
    return (
      <div className="App">
        <h1>Holden's Ugly To-Do List</h1>
        <TodoList
          todo={this.state.filter ? this.state.filter : this.state.todo}
          markCompleted={this.markCompleted}
        />
        <TodoForm
          addItem={this.addTodo}
          clearHandler={this.clearHandler}
          handleChange={this.handleChange}
          inputText={this.state.inputText}
          onChange={this.filterList}
        />
      </div>
    );
  }
}

export default App;
