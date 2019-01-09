import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const toDoData = [
  { toDoItem: 'Wash the car', id: Date.now(), completed: false },
  { toDoItem: 'Drink 16oz of water', id: Date.now(), completed: false },
  { toDoItem: 'Read a book', id: Date.now(), completed: false },
  { toDoItem: 'Cook dinner', id: Date.now(), completed: false },
  { toDoItem: 'Study tomorrow\'s class materials', id: Date.now(), completed: false }
];

class App extends React.Component {
  constructor() {
    super ();

    this.state = {
      toDoList: toDoData,
      toDoItem: '',
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewItem = ev => {
    ev.preventDefault();
    this.setState({
      toDoList: [
        ...this.state.toDoList,
        { toDoItem: this.state.toDoItem }
      ],
      toDoItem: ''
    });
  };

  render() {
    console.log('Render is running!');
    return (
      <div className="App">
      <TodoList toDoDataList={this.state.toDoList} />
      <TodoForm />
      </div>
    );
  }
}

export default App;
