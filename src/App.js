import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';

const todoListItems = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();
      this.state = {
          listItems: todoListItems,
          listItem: {
              item: '',
          },
      };
  }

  handleChanges = event => {
    this.setState({
      student: {
        ...this.state.todoListItems,
        [event.target.content]: event.target.value
      }
    });
  };

  addListItem = event => {
    event.preventDefault();
    this.setState({
      listItems: [...this.state.listItems, this.state.todoListItems],
      item: {}
    });
  };

  render() {
    return (
      <div className="app">
        {this.state.listItems.map(item => (
          <Todo todoListItems={item} />
        ))}
        <TodoForm />
      </div>
    );
  }
}

export default App;
