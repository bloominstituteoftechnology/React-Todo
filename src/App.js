import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: [],
      data: "",
      search: []
    };
  }
  componentDidMount() {
    let me = [
      {
        task: "Organize Garage",
        id: 1528817077286,
        completed: false
      },
      {
        task: "Bake Cookies",
        id: 1528817084358,
        completed: false
      }
    ];
    localStorage.setItem("myCat", JSON.stringify(me));
    let mee = localStorage.getItem("myCat");
    let josh = JSON.parse(mee);
    this.setState({ store: josh });
  }

  onChangeHandler = event => {
    const newState = this.state;
    newState.data = event.target.value;
    this.setState(newState);
  };

  onSubmitHandler = event => {
    event.preventDefault();
    let store = [...this.state.store];
    let newEntry = { task: this.state.data, id: Date.now(), completed: false };
    store = store.concat([newEntry]);
    this.setState({ store: store, data: "" });
    localStorage.setItem("myCat", JSON.stringify(store));
  };

  onSearchHandler = event => {
    if (event.target.value.trim().length > 1) {
      this.setState({ search: [] });
    }
    let index = event.target.value.toLowerCase();
    let newState = [...this.state.store];
    let filteredStore = newState.filter(
      element => element.task.toLowerCase().indexOf(index) > -1
    );
    this.setState({ search: filteredStore });
  };
  onFocusHandler = () => {
    this.setState({ search: [] });
  };
  onCompleteHandler = event => {
    const newState = [...this.state.store];
    let patchState = newState.map(element => {
      if (element["id"] === event) {
        element.completed = !element.completed
      }
      return element;
    });
    this.setState({ store: patchState });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <TodoList
          todoData={this.state.store}
          completed={this.onCompleteHandler}
        />
        <TodoForm
          change={this.onChangeHandler}
          submit={this.onSubmitHandler}
          value={this.state.data}
          search={this.onSearchHandler}
          outOfFocus={this.onFocusHandler}
        />
        <TodoList todoData={this.state.search} />
      </div>
    );
  }
}

export default App;
