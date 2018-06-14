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

  toggleCompletion = (event, id) => {
    const items = this.state.items.slice();
    for(let i = 0; i < items.length; i++) {
      if(items[i].id === id) {
        items[i].completed = !items[i].completed;
        event.target.classList.toggle('task--complete');
        break;
      }
    }
    this.setState({items: items});
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
        <TodoList completeHandler = {this.toggleCompletion} items={this.state.items} />
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
