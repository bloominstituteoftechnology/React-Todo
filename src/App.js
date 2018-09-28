import React , {Component} from 'react';
import Form from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    

    this.state = {
      input: "",
      item: [],
      status: false
    };
  }

  onSubmit= event => {
    event.preventDefault()
   this.setState({
     input: "",
     item: [...this.state.item, {input: this.state.input, id: this.state.id, status: this.state.status}]
   });

  };


  onChange = ( event ) => {
    this.setState({ input: event.target.value })
    console.log(event);

  };



  render() {
    return (
      <div className="App">
        <TodoList />
    <Form item = { this.state.input } onChange = { this.onChange}  handleClick= { this.onSubmit}  />

     </div>
    );
  }
}

export default App;
