import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import styled from "styled-components"
import "./components/TodoComponents/Todo.css";

const data = [
  {
    task: "clean room",
    id: 123,
    completed: false
  }
];

const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`;

const Title = styled.h2`
font-family: 'Rock Salt', cursive;
font-size: 3rem;
color:#e0dbd1;

`;
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: data
    };
  }

  addTask = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };

  deleteComplete = () => {
    this.setState({
      todo: this.state.todo.filter(task => {
        return task.completed === false
      })
    })
  };

  toggleCompleted = id => {
    this.setState({
      todo: this.state.todo.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  render() {
    return (
      <Container>
        {/* <Title>To Do List</Title> */}
        <div>
          <TodoForm addTask={this.addTask} clearComplete={this.clearComplete} />
        </div>
        <div>
          <TodoList
            todos={this.state.todo}
            toggleCompleted={this.toggleCompleted}
            deleteComplete={this.deleteComplete}
          />
        </div>
      </Container>
    );
  }
}

export default App;
