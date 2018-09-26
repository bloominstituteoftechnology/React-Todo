import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listItems: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
      ],
      itemToAdd: '',
    };
  }

  addItem = (event) => {
    let item = {
      task: this.state.itemToAdd,
      id: Date.now(),
      completed: false
    }
    this.state.listItems.push(item);

    this.setState({
      listItems: this.state.listItems
    })
    console.log(this.state.listItems);
  }

  textChanged = (event) => {
    this.setState({
      itemToAdd: event.target.value}
      );
      console.log(this.state.itemToAdd);
  }

  render() {
    return (
      <div className="list-container">
        <TodoForm textChanged={this.textChanged} addItem={this.addItem}/>
        <TodoList listItem={this.state.listItems} />
      </div>
    );
  }
}

export default App;
