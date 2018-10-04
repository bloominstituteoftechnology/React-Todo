import React from 'react';
import ToDoForm from "./components/TodoComponents/TodoForm.js";
import ToDoList from './components/TodoComponents/TodoList.js';

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todoData:[
        { task: 'Organize Garage',
          id: 1528817077286,
          completed: false}
          ,
        { task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      //inputText: '',
      newToDo: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addNewToDo = this.addNewToDo.bind(this);
  }
    changeHandler(event) {
      this.setState({
       // inputText: event.target.value,
        newToDo:event.target.value
      });
    }

    addNewToDo(event) {
      event.preventDefault();
      this.setState({
        todoData: [
          ...this.state.todoData,
          { task: this.state.newToDo,
            id: Date.now().toString(),
            completed: false
           }
        ],
        //inputText: '',
        newToDo: ''
    });
  } 
   // changeHandler = event => {
    //  this.setState({ [event.target.name]: event.target.value });
   // };

   // addNewToDo = event => {
    //  event.preventDefault();
    //  this.setState({
    //    todoData: [
     //     ...this.state.todoData,
     //     { task: this.state.newToDo,
     //       id: Date.now(),
     //       completed: false
     //      }
     //   ],
     //   newToDo: ''
     // });
   // };
 
  render() {
    return (
      <div className="App">
        <ToDoList todoData={this.state.todoData}></ToDoList>
        <ToDoForm></ToDoForm>
      </div>
    );
  }
}
     
  

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


export default App;
