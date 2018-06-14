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
      item: '',
    };
  }

  todoChange = event => {
    this.setState({ item: event.target.value})
  }
  addToDo = event => {
    if(this.state.item.length === 0) {
      return;
    }
    const items = this.state.items.slice();
    items.push({ task: this.state.item, id: Date.now(), completed: false });
    this.setState({ items: items, item: ''});
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <TodoForm 
        value = {this.state.item}
        changeTodoHandler = {this.todoChange}
        addTodoHandler = {this.addToDo}
        />
      </div>
    );
  }
}

export default App;
