// <App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
// - All of your application data will be stored here on `<App />`.
// - All of your `handler` functions should live here on `<App />`

import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

// const todoArr = [ 'start late', 'take slow', 'taper off'];
const todoArr = [
  {
    task: 'Solve riddles',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Potato the couch',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoArr: todoArr,
      newTodo: '',
    };

  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todoArr: [
        ...this.state.todoArr,
        {
          task: this.state.newTodo,
          id: Date.now(),
          completed: false
        }
      ],
      newTodo: '',
    });
  }

  changeHandler = event => {
    this.setState({ newTodo: event.target.value });
  };

  mark = (itemID) => {
    this.setState({todoArr: this.state.todoArr.map((item) => {
        if (item.id === itemID) {
            return {...item, completed: !item.completed}
          } else {
            return item;
          }
        }
      )}
    )  
  }

  clearItems = () => {
    let results = this.state.todoArr.filter(item => item.completed === false);
    this.setState({todoArr: results});
  }

  render() {
    return (
      <div className="container">
        <h2>Todos!</h2>
        <Todo passedData={this.state.test}/>
        <TodoList todoArr={this.state.todoArr} mark={this.mark}/>
        <TodoForm 
          addTodo={this.addTodo} 
          newTodo={this.state.newTodo}
          changeHandler={this.changeHandler}
          clearItems={this.clearItems}
        />
      </div>
    );
  }
}

export default App;
