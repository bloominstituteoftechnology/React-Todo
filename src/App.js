import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const initialListItems = [
  {
    task: 'Click me to mark complete',
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
      listItems: initialListItems
    }
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
        {task: taskName, id: Math.floor(Math.random()*100), completed: false}]
    })
  }

  handleItemDelete = () => {

  }

  clearCompleted = () => {

  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList listItems={this.state.listItems} toggleItemCompleted={this.toggleItemCompleted} />
        <TodoForm handleItemAdd={this.handleItemAdd} />
        <br />
        <button onClick={this.clearCompleted}>Clear Completed Tasks</button>

      </div>
    );
  }
}

export default App;
