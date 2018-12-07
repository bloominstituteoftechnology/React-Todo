import React from 'react';
import ToDoList from './components/TodoComponents/TodoList'
import ToDoForm from './components/TodoComponents/TodoForm'

import './App.css'

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

  /*
    the ideas were going to pass down the function
    and because of this method is defined in here
    this refers to app.js' this
  
  */
  addToDo = (text) =>{
    const newTodo = {
      task: text,
      id: Date.now(),
      completed: false
    };

    this.setState(prevState => {
      const todos = prevState.toDoList.slice();
      todos.push(newTodo);
      return { toDoList: todos };
    });
  }

  toggleCompleted = event=>{
    const myKey = event.target.dataset.key

    this.setState(prevState=>{
      const myTodoList = prevState.toDoList.slice()


      // find the to do
      let index = 0;
      const todo = myTodoList.find((e,i)=>{
        index = i;
        return e.id.toString() === myKey
      })

      //toggle the completed
      todo.completed === false? todo.completed = true: todo.completed=false;
      
      //update copied state
      myTodoList[index] = todo;

       // update actual state
      return {toDoList:myTodoList}
    })

  }
   
  clearCompleted= event =>{
    event.preventDefault();
    console.log(event.target)
    //copy state and filter out completed tasks
    const myTodoList= this.state.toDoList.slice().filter(e=>e.completed !==true)

    //update state
    this.setState({toDoList: myTodoList})

  }

  render() {
    // console.log(this.state)
    return (
      <div className="container is-dark with-title app-wrapper">
        <h2 className="title">Welcome to your Todo App!</h2>
        <div className="container is-dark with-title">
          <h3 className="title">To-Dos</h3>
          <ToDoList list={this.state.toDoList} toggleCompleted={this.toggleCompleted} />
        </div>
        <ToDoForm addToDo={this.addToDo} clearCompleted={this.clearCompleted}/>
      </div>
      
    );
  }
}

export default App;
