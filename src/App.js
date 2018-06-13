import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
      ],
      item: {
        task: '',
        id: Date.now(),
        completed: false
      }
    };
  }

  inputHandler = (value) => {
    this.setState({item: {
      task: value,
      id: Date.now(),
      completed: false
    }});
  };

  addTodo ()  {
    const items = this.state.items.slice();
    items.push(this.state.item);
    this.setState({items: items, item: {
      task: '',
      id: Date.now(),
      completed: false
    }});
  }
  clearItemsHandler = event => {
    console.log('clear');
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList items={this.state.items} />
        <TodoForm
          inputHandler={this.inputHandler}
          addTask={() => this.addTodo()}
          clearCompleted={() => this.clearItemsHandler()}
        />
      </div>
    );
  }
}

export default App;
