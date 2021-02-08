import React from "react";
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  // Constructor Function:
  constructor() {
    super();
    this.state = {
      list: [
        {
          task: "Call Recruiter Back",
          id: 12121,
          completed: false
        },
        {
          task: "Organize Desk",
          id: 12130,
          completed: false
        },
      ]
    }
  }

  // Handler Functions:
  handleAdd = (newTask) => {
    const newItem = {
      task: newTask,
      id: this.state.list.length + 1,
      completed: false
    }

    this.setState({
      list: [...this.state.list, newItem]
    })
  }

  handleComplete = (itemId) => {
    const newTodoList = this.state.list.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      };
    });

    console.log(newTodoList)
    
    this.setState({
      list: newTodoList
    });
  }

  handleClear = () => {
    const newTodoList = this.state.list.filter(item => !item.completed);

    this.setState({
      list: newTodoList
    });
  }

  render() {
    return (
      <div className="container">
        <TodoList
          list={this.state.list}
          handleComplete={this.handleComplete}
        />
        <TodoForm
          handleAdd={this.handleAdd}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
