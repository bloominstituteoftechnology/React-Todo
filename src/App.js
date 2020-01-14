import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';
import "./components/TodoComponents/Todo.css"


const data = [
  {
  name: 'clean bathroom',
  id: 123,
  completed: false
  },

  {
    name: 'walk dog',
    id: 124,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      list: data,
      completed: false,
    };
  };

  toggleItem = id => {
    const list = [...this.state.list]
    const item = this.state.find(I => I.id === id);
    const index = this.state.list.indexOf(item);
    item.completed = !item.completed;
    list[index] = item

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
      this.setState({
        list: this.state.list.filter(task => task.completed !== true)

      })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList removeCompleted={this.removeCompleted}
        list={this.state.list}
        toggleItem={this.toggleItem}
        />
      </div>
    )};
}

export default App;


// mvp completed 