import React from 'react';
import './components/TodoComponents/Todo.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const Todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Todos
      };
  };


toggleTodo = id => {
  this.setState({
   Todos: this.state.Todos.map(todo => {
    if(todo.id === id) {
      return {
        ...todo, //same as saying as below 
         // task: todo.task,
         // id: todo.id,
         // completed: todo.completed
         completed: !todo.completed
      }
    } 
    return todo;
   })
 });
    // loop over todos
    // find todo by given id
    // change flag to true
    // return updated list to state.
}



addTodo = todo => {
  const copiedTodos = this.state.Todos.slice();
  const newTodo = {
    task: todo,
    id: Date.now(),
    completed: false
  };
  copiedTodos.push(newTodo);
  // BUILD OUR TODO OBJECT
  this.setState({ Todos: copiedTodos });
};


  render() {
    return (
      <div className="app">
        <h2>Welcome to your Todo App!</h2>

        <TodoList 
         todos={this.state.Todos}
         toggleTodo={this.toggleTodo}
        />

         <TodoForm addTodo={this.addTodo} />

      </div>
    );
  }
}

export default App;


// this component is going to take care of state, and any change handlers you need to work with your state

//<App /> will hold all the data needed for this project. It will also be the container for your Todo Components.

//All of your application data will be stored here on <App />.

//All of your handler functions should live here on <App />.


//////////////////////////////////////////////////
//EXAMPLE

/*
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // same as - groceries: groceries
      groceries
    };
  }

  toggleItem = id => {
    this.setState({
      groceries: this.state.groceries.map(item => {
        if (item.id === id) {
          return {
            ...item,
            // name: item.name,
            // id: item.id,
            // purchased: item.purchased
            purchased: !item.purchased
          };
        }
        return item;
      })
    });
    // loop over groceries
    // find grocery by given id
    // change flag to true
    // return updated list to state.
  };

  addItem = item => {
    const copiedGroceries = this.state.groceries.slice();
    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    };
    copiedGroceries.push(newItem);
    // BUILD OUR ITEM OBJECT
    this.setState({ groceries: copiedGroceries });
  };

  clearPurchased = () => {
    // use filter
    // looping over all the items inside of `this.state.groceries`
    // filter out any items, who's item.purchased === true
    // set your state with your new filtered list.
  };

  render() {
    // when state is updated (Via setState) react calls render again!
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <ListForm addItem={this.addItem} />
        </div>
        <GroceryList
          groceries={this.state.groceries}
          toggleItem={this.toggleItem}
        />
        <button onClick={this.clearPurchased}>Clear Purchased</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/