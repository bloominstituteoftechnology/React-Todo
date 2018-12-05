import React from 'react';
import ToDoList from './components/TodoComponents/TodoList'
import ToDoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){ 
    super();
    this.state= {
      toDoList:[
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }

   addToDo = event =>{
    //prevent default
    event.preventDefault()

    // get the input box
    const input=document.querySelector('#todo-input')

    // make a copy of state
    const myTodoList= this.state.toDoList.slice()

    //  make a new to do
    const newToDo = {
       task: input.value,
       id: Date.now(),
       completed: false
    }

    // add thee new to do
    myTodoList.push(newToDo)

    //update state
    this.setState({toDoList: myTodoList})

    //clear input
    input.value= ""
   }


  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList list={this.state.toDoList} />
        <ToDoForm clickHandler={this.addToDo}/>
      </div>
    );
  }
}

export default App;
