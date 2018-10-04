import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./components/TodoComponents/Todo.css";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [
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
      ],

      newTodo: ""
    };
  }

  //this used to take in only event and set newTodo to event.target.string in setState
  //changed params for function in TodoForm.js to take in key and value
  // ("newTodo", event.target.value) for same effect, now persists in window memory
  changeHandler = (key, value) => {
    this.setState({
      [key]: value
    });
    //updating localStorage
    localStorage.setItem(key, value);
  };

  addNewTodo = event => {
    //preventDefault prevents page from refreshing upon the form entry
    event.preventDefault();
    //added this if statement to alert the user if they try to add too many
    //todos, keeps the list from going over 10. also does a setState call to reset newTodo (clear the input field)
    if (this.state.newTodo !== "") {
      let newList = [
        ...this.state.todoList,
        {
          task: this.state.newTodo,
          id: Date.now(),
          completed: false
        }
      ];

      if (this.state.todoList.length >= 10) {
        alert("Slow your roll and knock these items out first!");
        this.setState({ newTodo: "" });
      } else {
        this.setState({
          todoList: newList,
          newTodo: ""
        });
        //updating new todoList to local storage
        //but no longer needed thanks to updating all keys and values
        //with componentDidMount/WillUnmount methods
        // localStorage.setItem("todoList", JSON.stringify(newList));
        // localStorage.setItem("newTodo", "");
      }
    }
  };

  toggleComplete = event => {
    //create a copy of the todoList array
    //the only modification is that the clicked item's `completed`
    //value changes. then use setState({todoList: newArray})

    let newArray = this.state.todoList;
    newArray.forEach(function(item) {
      if (item.id == event.target.id) {
        if (item.completed) {
          item.completed = false;
        } else {
          item.completed = true;
        }
      }
    });
    this.setState({
      todoList: newArray
    });
    //updating new copy of todoList to local storage
    //but no longer needed thanks to updating all keys and values
    //with componentDidMount/WillUnmount methods
    // localStorage.setItem("todoList", JSON.stringify(newArray));
  };

  //filterComplete first makes copy of the current todoList array and filters through it,
  //creating a new filteredArray only made up of incomplete items
  //then sets itself as the new todoList array via setState
  filterComplete = event => {
    let filteredArray = this.state.todoList.filter(
      item => item.completed === false && item.task !== ""
    );
    console.log(filteredArray);
    this.setState({
      todoList: filteredArray
    });
  };

  //this method 'hydrates' the app's state with data pulled from local storage that we stored with
  //localStorage methods. this is so freaking awesome
  hydrateStateFromStorage() {
    // for all items that currently exist in state
    for (let key in this.state) {
      //if key exists in local storage
      if (localStorage.hasOwnProperty(key)) {
        //then get key's value from storage
        let value = localStorage.getItem(key);

        //parse localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (error) {
          // handles if error (empty string)
          this.setState({ [key]: value });
        }
      }
    }
  }

  //this built-in method will fire when the page loads and call hydrateState
  componentDidMount() {
    this.hydrateStateFromStorage();

    //add listener to save state to storage when user leaves or refreshes
    window.addEventListener("beforeunload", this.saveStateToStorage.bind(this));
  }

  saveStateToStorage() {
    //for every item in current state
    for (let key in this.state) {
      //save to local storage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  //this built-in method will fire if the component has a chance to unmount (leave page/refresh)
  //will remove the previously attached listener and update storage again
  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToStorage.bind(this)
    );

    this.saveStateToStorage();
  }

  render() {
    return (
      <div className="app">
        <h1 className="title">To-do List</h1>
        <TodoForm
          filterComplete={this.filterComplete}
          addNewTodo={this.addNewTodo}
          changeHandler={this.changeHandler}
          newTodo={this.state.newTodo}
          todoList={this.state.todoList}
        />
        <h2 className="list-header">What I need to do:</h2>
        <TodoList
          todoList={this.state.todoList}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
