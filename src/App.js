import React from 'react';
import FormInput from '../src/components/TodoComponents/TodoForm';
import ListItems from '../src/components/TodoComponents/TodoList';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {input: '', myTodoList: []};
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const myObj = {
      task: this.state.input,
      id: Date.now(),
      completed: false
    };

    this.setState({
      myTodoList: [...this.state.myTodoList, myObj],
      input: ''
    });

  };

  handleInputs = (event) => {
    const {value} = event.target;
    this.setState({input: value});
  };


  render() {
    return (
      <div>
        <h2>Todo List: MVP </h2>
        <ListItems myTodoList = {this.state.myTodoList}/>
        <FormInput input = {this.state.input} handleSubmit = {this.handleSubmit} handleInputs = {this.handleInputs} />
      </div>
    );
  }
}

export default App;
