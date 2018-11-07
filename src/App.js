import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const myList = [
  { listItem: 'Do Stuff', id: 1, completed: false},
  { listItem: 'Do More Stuff', id: 2, completed: false}
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      listItems: myList,
      inputText: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addItem = event => {
    event.preventDefault();
    this.setState({
      listItems: [...this.state.listItems, {listItem: this.state.inputText, id: Date.now(), completed: false}
      ],
      inputText: ''
    });
  };
  
  render() {
    return (
      <div>
        <TodoList todoItems={this.state.listItems} />
        <TodoForm addListItem={this.addItem} inputText={this.state.inputText}
        handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
