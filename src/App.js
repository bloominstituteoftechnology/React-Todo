import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      list: [
        {listItem: 'learn setState()'},
        {listItem: 'Style my ToDo List'}
      ],
      inputText: ''
    }
  }

  // design `App` to be the parent component of your application.
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addListItem = e => {
    e.preventDefault();
    this.setState({
      list: [
          ...this.state.list,
          {listItem: this.state.inputText}
      ],
      inputText: ''
    });
  }

  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList list={this.state.list} />
        <TodoForm 
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          addListItem={this.addListItem}
        />
      </div>
    );
  }
}

export default App;
