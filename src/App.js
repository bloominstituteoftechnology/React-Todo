import React from 'react';
import ToDoForm from "./components/TodoComponents/TodoForm.js";
import ToDoList from "./components/TodoComponents/TodoList.js";

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state =  {
        todoData:[
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
      ],
      inputText: '',
      newToDo: ''
    }

    changeHandler = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    addNewToDo = event => {
      event.preventDefault();
      this.setState({
        todoData: [
          ...this.state.todoData,
          { task: this.state.newToDo,
            id: Date.now(),
            completed: false
           }
        ],
        newToDo: ''
      });
    };
    
    
  
    render() {
      return (
        <ToDoList></ToDoList>
        <ToDotForm></ToDoForm>
      );
    }
  }
}
  

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


export default App;
