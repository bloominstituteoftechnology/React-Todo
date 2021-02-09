import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todoData = [ {
  task: '',
  id: 152,
  completed: false
},
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData: todoData,


    }
  }

  toggleItem = (clickedItemId) => {
    this.setState({
      todoData: this.state.todoData.map((item) => {
        if(item.id === clickedItemId){
          console.log(clickedItemId, 'Toggle Item')
          return ({
            ...item,
            completed: !item.completed,
          });
        } else {
          return (item);
        }
      })
    })
  }

  addItem = (newItem) => {
    this.setState({
      todoData: [...this.state.todoData, {
        task: newItem,
        id: Date.now(),
        completed: false
      }]
    })
  }
  clearItems = (e) => {
    e.preventDefault();
    this.setState({
      todoData: this.state.todoData.filter((item) => {
        return (  !item.completed  )
      })
    })
  }
  
  
  
  render() {
    return (
      <div>
        <h2>Task List</h2>
        <TodoList todoData={this.state.todoData} toggleItem={this.toggleItem} clearItems={this.clearItems} />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
