import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const startingList= [
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
  //____________Constructor____________
    constructor(){
      super();
      this.state = {
      list: startingList

      }
    }
  //___________Toggle Complete__________
    toggleTodo = todoId => {
      console.log(todoId);
      
      this.setState({
        list: this.state.list.map(todo => {
          
          if (todoId === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          // if the item does NOT match the id that was clicked
          // just return the item, unchanged
          return todo;
        })
      });
    };

  //______________Add Todo_____________
    addTodo = (e, todo) => {
      e.preventDefault();
      const newTodo = {
        task: todo,
        id: Date.now(),
        completed: false
      };
      this.setState({
        list: [...this.state.list, newTodo]
      });
    };
  
  //____________Delete Todo_____________
    clearComplete = e => {
      e.preventDefault();
      this.setState({
        list: this.state.list.filter(todo => !todo.completed)
      });
    };


    render() {
      console.log(this.state.list);
      return (
        <div className="App"> 
          <div className ="header">
            <h2>Welcome to your Todo App!</h2>
          </div>
          <TodoForm addTodo={this.addTodo} />
          <TodoList
            list={this.state.list}
            toggleTodo={this.toggleTodo}
            clearComplete={this.clearComplete}
          />
        </div>
      );
    }
}

export default App;
