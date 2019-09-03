import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData: []
    };
  }

  addItem = item => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({ todoData: [...this.state.todoData, newItem] });
  };
  CompletedToggle = (e) => {
   
    console.log(e);
    this.setState({
      todoData: this.state.todoData.map((item) => {
        if (item.id === e.id) {
          return {
            ...item,
            completed: ! item.completed
          }
        }
        else {
          return item;
        }
      })
    })
    
  }
  clearCompleted = item => {};
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoData={this.state.todoData} completedToggle={this.CompletedToggle}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
