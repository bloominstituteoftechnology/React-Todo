import React from "react";

//components
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import AppHeader from "./components/TodoComponents/AppHeader";
import deleteAll from './components/TodoComponents/DeleteAll'
//data
import todoData from "./todoData";

//styling
import { Container } from "semantic-ui-react";
import DeleteAll from "./components/TodoComponents/DeleteAll";

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

  handleCheckboxChange = event => {
    // const deleteAll = {
    //   ...todoData
    // }
    this.setState({ todoData });
  };

  addTodoItem = item => {
    const newItem = {
      task: item,
      id: Math.floor(Math.random() * 1000),
      completed: false
    };
    this.setState({ todoData: [...this.state.todoData, newItem] });
    // console.log(newItem)
  };

  render() {
    return (
      <Container
        textAlign="left"
        style={{
          margin: "15% auto",
          width: "450px",
          borderRadius: "5px",
          border: "1px #d1d1d1 solid",
          padding: "1%"
        }}
      >
        <AppHeader />
        <TodoForm
          addTodoItem={this.addTodoItem}
          />
        <TodoList
          todoData={this.state.todoData}
          handleChange={this.handleChange}
          />
          
        <DeleteAll handleCheckboxChange={this.handleCheckboxChange}/>
      </Container>
    );
  }
}

export default App;
