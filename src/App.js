import React from 'react';
import './App.css';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const toDoData = [
  { toDoItem: 'Wash the car', id: Date.now(), completed: false, textDecoration: "none" },
  { toDoItem: 'Drink 16oz of water', id: Date.now(), completed: false, textDecoration: "none" },
  { toDoItem: 'Read a book', id: Date.now(), completed: false, textDecoration: "none" },
  { toDoItem: 'Cook dinner', id: Date.now(), completed: false, textDecoration: "none" },
  { toDoItem: 'Study tomorrow\'s class materials', id: Date.now(), completed: false, textDecoration: "none" }
];

class App extends React.Component {
  constructor() {
    super ();

    this.state = {
      toDoList: toDoData,
      toDoItem: '',
      id: Date.now(),
      completed: false
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onClick = () => {
    this.setState({ textDecoration: "strikethrough"});
  }

  addNewItem = ev => {
    ev.preventDefault();
    this.setState({
      toDoList: [
        ...this.state.toDoList,
        { toDoItem: this.state.toDoItem,
        id: Date.now(),
        completed: false }
      ],
      toDoItem: ''
    });
  };

  render() {
    console.log('Render is running!');
    return (
      <div className="body">
      <div className="App">
      <h1 className="toDoHeader">Things to Accomplish:</h1>
      <TodoList 
      toDoDataList={this.state.toDoList}
      clicked={this.onClick} />
      <TodoForm
        addNewItem={this.addNewItem}
        handleChanges={this.handleChanges}
        toDoItem={this.state.toDoItem}
         />
      </div>
      </div>
    );
  }
}

export default App;
