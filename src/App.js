
import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  

     constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      style: 'notDone',
      newItem: ''
    };
  }

  itemComplete = event => {
    event.preventDefault();
    
      this.setState({ isDone: true });
      this.setState({style: 'done'});
    
  };

  changeHandler = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewItem = event => {
    event.preventDefault();
    this.setState({
      listItems: [
        ...this.state.listItem,
        { listItem: this.state.newItem }
      ],
      newItem: ''
    });
  };

  render() {
    return (
      <div className="App">
      <h1>To Do List</h1>
        <ToDoForm 
       listItems = {this.state.listItems}
       style = {this.state.style}
       newItem = {this.state.newItem} />
        <ToDoList />
        
      </div>
    );
  }
}

export default App;
