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

  markComplete = id => {
    this.setState({
      listItems: this.state.listItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: item.completed === true ? false : true
          };
        } else {
          return item;
        }
      })
    });
  };
  
  clearCompleted = ev => {
    ev.preventDefault();
    this.setState({
      listItems: this.state.listItems.filter(
        item => !item.completed
      )
    });
  };

  render() {
    return (
      <div>
        <TodoList todoItems={this.state.listItems} 
        markComplete={this.markComplete}/>
        <TodoForm addListItem={this.addItem} 
        inputText={this.state.inputText}
        clearCompleted={this.clearCompleted}
        handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
