import React from "react";

//components
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
//data
import todoData from "./todoData";

//styling
import { Container } from "semantic-ui-react";

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

  handleChange = id => {
    this.setState({
      todoData: this.state.todoData.map(item => {
        if (id === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addTodoItem = item => {
    const newItem = {
      task: item,
      id: Math.floor(Math.random() * 1000),
      completed: false
    };
    this.setState({ todoData: [...this.state.todoData, newItem] });
    console.log(newItem)
  };

  render() {
    return (
      <Container style={{marginTop:'10%'}}>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodoItem={this.addTodoItem}/>
        <TodoList
          todoData={this.state.todoData}
          handleChange={this.handleChange}
        />
      </Container>
    );
  }
}

export default App;
