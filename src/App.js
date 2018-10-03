import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = { list: [
        {item: 'walk dog',
         id: Date.now(),
         complete: false},
        {item: 'dishes',
         id: Date.now(),
         complete: false},
        {item: 'laundry',
         id: Date.now(),
         complete: false}
      ],
      newItem: ''
      }

  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  changeHandler = event => {
    this.setState({newItem: event.target.value})
  }
  addItem = (event) => {
    event.preventDefault();
    this.setState( {
        list: [
        ...this.state.list,
        {item: this.state.newItem, id: Date.now(), complete: false}
        ], newItem: ''
    });
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.list} />
        <Todo />
        <TodoForm
          newItem={this.state.newItem}
          changeHandler={this.changeHandler}
          addItem={this.addItem}
        />
      </div>
    )
  }
}

export default App;
