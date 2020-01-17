import React from 'react';
import Todo from "./components/TodoComponents/Todo";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm"
import Styled from "styled-components"
const data = [
  {
    task: 'Grocery Shopping',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Cook Dinner',
    id: 1528817084358,
    completed: false
  }
];
const AppStyle = Styled.div`

.task.done{
text-decoration: line-through;
} .title{
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  margin-left: 500px;
  margin-right: 500px;
  background-color: aqua;
}

`
 
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
     todo: data,
     otherState: "this other state"
    };

    this.toggleDone = this.toggleDone.bind(this);
  }
  toggleDone(taskId) {
    console.log("toggleDone: ", taskId);
 
  this.setState({
    todo: this.state.todo.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done
        };
      }
      return task;
    })
  });
  }

clearTask = () => {
  console.log("clearTask");
  this.setState({
    todo: this.state.todo.filter(task => {
      return !task.done;
    })
  });
};


addTask = taskName => {
  console.log("add task: ", taskName);

  this.setState({
    todo: [
      ...this.state.todo,
      {
        name: taskName,
        id: Date.now(),
        purchased: false
      }
    ]
  });
}
  render() {
    
    console.log("rendering...");
    return (
      <AppStyle>
      <div className="App">
        <div className="header">
          <h1 className="title">Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleDone={this.toggleDone}
          clearTask={this.clearTask}
        />
       
      </div>
      </AppStyle>
    );
  }
}

export default App;

