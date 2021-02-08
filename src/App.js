import React from 'react';
import ToDoList from './components/TodoList';
import TodoForm from './components/TodoForm';



const toDo = [
  {
    task: 'Clean Shop',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Set up gym',
    id: 1528817084358,
    completed: false
  }
  
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: toDo
    }
  }

  toggleItem = (clickedItemId) => {
    this.setState({
      toDo: this.setState.toDo.map(item => {
        if(item.id === clickedItemId) {
          return{
            ...item,
            completed: !item.completed,
          };
        } else{
          return item;
        }
      }),
    });
  };
  addItem = (item) => {
    console.log(item);
    // this.setState({
    //   toDo:[...toDo]
    // })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList toDo={this.state.toDo} toggleItem={this.toggleItem} />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
