import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm'
import ToDoList from './components/TodoComponents/TodoList'

let initState = {

}
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task: [],
      id: [],
      completed: []
    };
    this.baseState = this.state;
    this.submit = this.submit.bind(this);
    this.clearToDo = this.clearToDo.bind(this);
  }


  submit(event) {
    console.log();
    event.preventDefault();
    this.setState({
      task: [...this.state.task, event.target.item.value],
      id: [...this.state.id, Date.now()],
      completed: [...this.state.completed, false]
    })
  }
  clearToDo(event) {
    event.preventDefault();
    this.setState(this.baseState)
  }



  render() {
    return (
      <div>
        <ToDoForm submit={this.submit} clear={this.clearToDo} setData={this.setData} />
        < ToDoList task={this.state.task} />
      </div>
    );
  }
}

export default App;
