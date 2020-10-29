import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const toDo = [
  {
    task: 'Learn Advanced React: Class Components',
    id: 1,
    completed: false
  },
  {
    task: 'Read the Tool Kit',
    id: 2,
    completed: false
  },
  {
    task: 'Prepare to watch the video clips ',
    id: 3,
    completed: false
  },
  {
    task: 'Learn to explain Class Components',
    id: 4,
    completed: false
  },
  {
    task: 'Complete the Guided Project',
    id: 5,
    completed: false
  },
]

class App extends React.Component {
  // Constructor with state
  constructor (){
    super();
    this.state = ({toDo: toDo})
  }
  
  // Class methods to update state
  completeItem = (itemID) => {
  
    // update state
  this.setState({
    toDo: this.state.toDo.map(item => {
      if(item.id === itemID) {
        return {
          ...item,
          completed: !item.completed
        };
      }
        return item;
    })
  });
};

  addToDo = (toDoItem) => {

    this.setState({
      toDo: [...this.state.toDo, {
        task: toDoItem,
        id: this.state.toDo.length,
        completed: false
      }]
    }) 
  }

  clearCompleted = () => {
      this.setState({
        toDo: this.state.toDo.filter((item) => !item.completed)
      });
  };
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
        <h1>Todo List:</h1>
        <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
        toDo={this.state.toDo}
        completeItem={this.completeItem}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}
export default App;