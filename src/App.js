import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import '../src/components/Todo.css';

const toDoList = [
  {
  item: "Clean the bathroom",
  id: 1234,
  done: false
},
{
  item: "Do the dishes",
  id: 5678,
  done: false
  },
  {
    item: "Take out the trash",
    id: 9012,
    done: false
    }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list : toDoList,
    };
  }
// this add/submit function will add a todo item to the array 
  // the function needs to create a new item, so it must 'set-up' a skeleton for where item will live
  addTodo = (todoItem) => {
    const newTodo = { // new item home and what 'rooms' it has
      item: todoItem,
      id: new Date(),
      done: false
    };
    // using the setState func to update the state with the newTodo item
    this.setState({
      list: [...this.state.list, newTodo]
    });
  };

  // this clear function will clear all todo items that have been switched to done
  clearTodo = () => {
    this.setState({
      list: this.state.list.filter((listItem) => {
        if (listItem.done === true) {
          return '';
        } else {
          return listItem;
        }
      })
  })
};

  // this toggle function will switch todo item to true (e.g. task is done)
  toggleDone = (clickedItemId) => {
    this.setState({
      list: this.state.list.map((listItem) => {
        if (listItem.id === clickedItemId) {
          return {
            ...listItem,
            done: !listItem.done
          };
        } else {
          return listItem;
        };
      })
    });
  };

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <div className="todo-container">
        <TodoForm 
          addTodo={this.addTodo}
          clearTodo={this.clearTodo}
          className="container container1"  
        />
         <TodoList 
          list={this.state.list} 
          key={this.state.list.id} 
          toggleDone={this.toggleDone} 
          className="container container2"
        />
        </div>
      </div>
    );
  }
}

export default App;
