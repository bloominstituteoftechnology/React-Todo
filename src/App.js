import React from "react";

//components
import TodoList from "./components/TodoComponents/TodoList";
//data
import todoData from "./todoData";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData
    };
  }

  //Use HandleChange to conditionally render todo Item list.  If checked, strike through the todo Item.
  // handleChange = (id) => {
  //   this.setState(prevState => {
  //     const updater = prevState.todoData.map(item => {
  //       if(item.id === id) {
  //         return {
  //           ...item,
  //           completed: !item.completed
  //         }
  //         return updater
  //       }
  //     })
  //     return {
  //       todoData: updater
  //     }
  //   })
  // }

  handleChange = id => {
    this.setState({
      todoData: this.state.todoData.map(item => {
        if (item.id === id) {
          return {
            ...todoData,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todoData={this.state.todoData}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
