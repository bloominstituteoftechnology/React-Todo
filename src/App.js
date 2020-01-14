import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';
import "./components/TodoComponents/Todo.css"

const data = [
  {
    name: 'clean toilet',
    id: 123,
    completed: false
  },
  {
    name: 'feed dumb cats',
    id: 124,
    completed: false
  }

];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: data,
      completed: false,
    };
  };

  toggleItem = id => {
    console.log("hey!")
    const list = [...this.state.list] // FASTER THAN A GOSH DERN IF STATEMENT BROOO
    const item = this.state.list.find(I => I.id === id);
    const idx = this.state.list.indexOf(item);
    item.completed = !item.completed;
    list[idx] = item
 
    this.setState({
      list
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    });
  };

  removeCompleted = () => {
    console.log('heyo douche!')
    this.setState({
        list: this.state.list.filter(task => task.completed !== true )
    })
  }  
 

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {

    console.log("I rendered a new thing...")
    // const sortedTodoList = this.state.todoList.sort(
    //   (a, b) => a.completed - b.completed
    // );
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}  />
        <TodoList removeCompleted={this.removeCompleted}
          list={this.state.list}
          toggleItem={this.toggleItem}
        />

      </div>
    )}
    

    
    }
export default App;
