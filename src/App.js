import React from 'react';
import './components/Todo.css';

// import components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


// initial todo data
const todoData = [
  {
    task: 'Wash Car',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Eat up Martha',
    id: 1528817077286,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      list: todoData
    };
  };

  toggleItem = (todoId) => {
    this.setState({
      list: this.state.list.map(item => {
        if(item.id === todoId){
          return {
            ...item,
            completed: !item.completed
          } 
        } else {
          return item
        }
      })
    });
  };

  addItem = (newTodo) => {
    this.setState({
      list:[...this.state.list, {
        task: newTodo,
        id: Date.now(),
        completed: false
      }]
    });
  };

  clearItems = () => {
    this.setState({
      list:this.state.list.filter(item => (!item.completed))
    });
  };

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <TodoList toggleItem={this.toggleItem} list={this.state.list}/>
        <TodoForm addItem={this.addItem} clearItems={this.clearItems}/>
      </div>
    );
  }
}

export default App;
