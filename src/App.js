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

  toggleCompleted = event=>{
    console.log(event.target.innerText)
    //copy state
    const myTodoList= this.state.toDoList.slice()

    // find the to do
    let index = 0;
    const todo = myTodoList.find((e,i)=>{
      index = i;
      return e.task === event.target.innerText
    })

    //toggle the completed
    todo.completed === false? todo.completed = true: todo.completed=false;
    
    //update copied state
    myTodoList[index] = todo;
    console.log(todo)

    // update actual state
    this.setState({toDoList:myTodoList})

  }
   
  clearCompleted= event=>{
    event.preventDefault();
    console.log(event.target)
    //copy state and filter out completed tasks
    const myTodoList= this.state.toDoList.slice().filter(e=>e.completed !==true)

    //update state
    this.setState({toDoList: myTodoList})

  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList list={this.state.toDoList} toggleCompleted={this.toggleCompleted} />
        <ToDoForm clickHandler={this.addToDo} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
