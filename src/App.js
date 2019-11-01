import React, {Component} from 'react';
import Title from './components/TodoComponents/Title';
import Todo from './components/TodoComponents/TodoList';



class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      titleMessage: 'My TodoList App!',
      todoItem: "",
      todoList: []
    };
  }
 /* changeHandler = event => {
    this.setState({todoItem: event.target.value});
  }; */
  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.setState({todoItem: event.target.value});
      
    }
  };
  

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({todoList: [...this.state.todoList, this.state.todoItem]})
        
  }
  
  render() {
    return (
      <div>
        <Title message={this.state.titleMessage} />
        <Todo items={this.state.todoList} />
        <form onSubmit={this.handleSubmit}>
        <input type="text" onKeyDown={this.handleKeyDown} />
        </form>
      </div>
    );
  }
}

export default App;
