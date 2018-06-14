import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos : [
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
      ],
      tempTodo: ''
    }
  }

  onInputChangeHandler = (e) => {
    console.log('Something was typed in the input field')
    this.setState({tempTodo: e.target.value})
    // console.log(this.state.todos)
  }

  onTodoClick = (id) => {
    //Clone state
    let localTodos = this.state.todos.slice();
    console.log(this.state, "original state")
    console.log(localTodos, "clone of state")

    // Map over the array and if the id matches the one that was selected, toggle completed
    // if not, pass back the todo object
    localTodos = localTodos.map( todo => {
      if (todo.id === id) {
        let todoObj = {}
        todoObj.task = todo.task;
        todoObj.id = todo.id;
        todoObj.completed = !todo.completed;
        return todoObj
      } else return todo
    })

    console.log(localTodos, "modified completed")

    //Update State - looks like you have to update everything! This seems weird. Why can't we just update the part of the state that changed?
    this.setState({
      todos:localTodos,
      tempTodo:''
    })

    console.log(this.state, "after simple setState call")

  }

  onKeyUp = (e) =>{
    if (e.keyCode === 13) {
      console.log('You pressed enter')
      this.updateList()
    }
  }

  addHandler = (e) => {
    console.log('You clicked the add button')
    this.updateList()
  }

  clearHandler = () => {
    console.log('You clicked the clear button')
    
    // Clone state
    let localTodos = this.state.todos.slice();

    if (localTodos.length > 0){
      localTodos = localTodos.filter(cv => !cv.completed)
    }

    //Update State
    this.setState({
      todos:localTodos,
      tempTodo:''
    })

  }

  updateList = () => {
    this.setState(prevState => {
      return {
         todos: prevState.todos.concat({
           task:this.state.tempTodo,
           id: new Date().getTime(),
           completed:false            
         }),
         tempTodo:""
       }
     }); 
  }


  render() {
    return (
      <div className="desk">
        <div className="loose-leaf">
          <h1 className="header">A Todo List in React</h1>
          {/* {console.log(this.state.todos,"in App.js Render this.state.todos")} */}
          <TodoForm
            inputValue={this.state.tempTodo} 
            onInputChangeHandler= {this.onInputChangeHandler} 
            addButtonHandler={this.addHandler} 
            clearButtonHandler={this.clearHandler}
            onKeyUp={this.onKeyUp}
          />
          <TodoList todo={this.state.todos} onTodoClick={this.onTodoClick}/>
        </div>
      </div>
    );
  }
}

export default App;
