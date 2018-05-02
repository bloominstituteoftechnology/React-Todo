import React from 'react';
import { render } from 'react-dom';
import App from './App';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      toDos: [],
      newToDos:''
    };
  }

  handleSubmit = () => {
    const ToDos = this.state.newToDos;
    const newToDos = {name: this.state.toDos, id: this.state.toDos + toDos.length};
    toDos.push(newToDos);
    this.setState({newToDos: newToDos, toDos: ""});
};

handleNewTodo = event => {
  this.setState({newToDo: event.target.value});
};

render() {
  return (
    <div>
      <h1>{this.state.title}<h1>
  )
  
}


render(<App />, document.getElementById('root'));
