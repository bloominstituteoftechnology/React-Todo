import React, {Component} from 'react';
import Title from './components/TodoComponents/Title';
import Todo from './components/TodoComponents';



class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      titleMessage: 'My TodoList App!',
      todoItem: ""
    };
  }
  changeHandler = event => {
    this.setState({someValue: event.target.value});
  };

  render() {
    return (
      <div>
        <Title message={this.state.titleMessage} />
        <Todo item={this.state.todoItem}
      </div>
    );
  }
}

export default App;
