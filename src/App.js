import React from 'react';
import Todos from './components/TodoComponents/Todos';
import Header from './components/Layout/Header';
import AddTodo from './components/TodoComponents/AddTodo';


class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Trash',
        status: false
      },
      {
        id: 2,
        title: 'Dinner Prep',
        status: false
      },
      {
        id: 3,
        title: 'Meeting',
        status: false
      },
    ]
  }

  markComplete = (id) => {
    debugger;
    this.setState({todos: this.state.todos.map(todo =>{
      if (todo.id === id){
        todo.status = !todo.status
      }
      return todo;
    })});
}

//Delete
delTodo =(id) => {
  this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]})
}

  render () {
    return (
      <div className='App'>
        <div className='container'>
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      <AddTodo />
      </div>
      </div>
     );
    }
  }
export default App;
