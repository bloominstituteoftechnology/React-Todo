import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
  {
    task: 'Take the dog for a walk',
    id: 0,
    completed: false,
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  
  constructor() {
    super();
    
    this.state = {
      listItems: todos,
    }
    console.log("todos",this.state.listItems)
  }

  toggleItemCompleted = (clickedItemId) =>{
    const newTodo = this.state.listItems.map((item)=>{
      
        if(item.id === clickedItemId){
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      })
      this.setState({
        listItems: newTodo,
      })
  }

  handleItemAdd = (taskName) => {
    this.setState({
      listItems: [...this.state.listItems,
        {
          task: taskName, 
          id: Math.floor(Math.random()*100), 
          completed: false
        }]
    })
  }

  handleItemDelete = () => {

  }

  clearCompleted = () => {
    
  }

  render() {
    
    console.log("list items", this.state.listItems)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList listItems={this.state.listItems} toggleItemCompleted={this.toggleItemCompleted}
        clearCompleted={this.clearCompleted} />
        <TodoForm handleItemAdd={this.handleItemAdd} />
        <br />
        <button onClick={this.clearCompleted}>Clear Completed Tasks</button>

      </div>
    );
  }
}

export default App;

// steps to build from scratch
// build out UI in App.js using jsx
// need to wrap code in {} if injected into HTML/JSX section