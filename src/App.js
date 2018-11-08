import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import Form from './components/TodoComponents/TodoForm'



const toDo = [
  {toDoItem: 'mop'},
  {toDoItem: 'sweep '},
  {toDoItem: 'cook'}
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state



  

  constructor () {
    super();
    this.state = {
      toDoItems: toDo,  //holds the toDo array
      inputText: '',
    }
  }

  handleChange = event => {
    console.log(this.state.toDoItems)
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addItem = event => {
    event.preventDefault();
    this.setState({
      toDoItems: [...this.state.toDoItems, {toDoItem: this.state.inputText}], 
      inputText: ''
    }) 
  }
  
  render() {
    return (
      <div className='App'>
        <h2>Today's Todo's!</h2>
        <TodoList toDoItems={this.state.toDoItems}/>     {/*adds toDo array to the TodoList component. toDoItems becomes prop of TodoList */}
         
         <Form 
         inputText={this.state.inputText} /*this is where the form gets access to whatever we put in the input field */
          addItem={this.addItem}
          handleChange={this.handleChange} 
        />
      </div>
   );
      }
}

export default App;
