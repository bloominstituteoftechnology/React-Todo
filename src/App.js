import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      listItems: [],
      inputListItem: ''
    };
  };

  typedInputHandler = event =>
    this.setState({[event.target.name]: event.target.value});

  addTodo = event => {
    event.preventDefault();
    const newTodo = this.state.listItems.slice();
    newTodo.push({task: this.state.inputListItem, id: Date.now(), completed: false });
    this.setState({ listItems: newTodo, inputListItem: '' });
  };

  toggleStrike = id => {
    let checkOnOffList = this.state.listItems.slice();
    checkOnOffList.map(item => {
      if (item.)
    });
  };

  render() {

    console.log('RENDER IS BEING CALLED')

    return (
      <div className='app-container'>
        <h1 className='header'>Todo List: MVP</h1>
        <ToDoList 
          list={this.state.listItems}
        />
        <ToDoForm
          inputItem={this.state.inputListItem}
          typedInput={this.typedInputHandler}
          submitTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;

