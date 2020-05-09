import React from 'react';
// import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

const plan = [
  {
    name: 'Take Shower',
    id: 1,
    done: false
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      plan,
    }
  }

  toggleTodoDone = todoId => {
    console.log('aw: App.js: App: toggleTodoDone: todoId: ', todoId);
    this.setState({
      plan: this.state.plan.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo;
      })
    })
  }

  addNewTodo = todoName => {
    console.log('aw: App.js: App: addNewTodo: todoName: ', todoName);
    this.setState({
      plan: [
        ...this.state.plan,
        {name: todoName, done: false, id: Date.now()}
      ]
    })
  }

  clearDone = () => {
    console.log('aw: App.js: App: clearDone: ');
    this.setState({
      plan: this.state.plan.filter(todo => {
        return !todo.done;
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Todo List</h2>
        </div>
        <TodoForm addNewTodo={this.addNewTodo} />
        <TodoList
          toggleTodoDone={this.toggleTodoDone}
          plan={this.state.plan}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default App;
