import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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
      <div>
        <h2>Welcome to your Todo App!</h2>
        {/* {console.log(this.state.todos,"in App.js Render this.state.todos")} */}
        <TodoList todo={this.state.todos}/>
        <TodoForm 
          inputValue={this.state.tempTodo} 
          onInputChangeHandler= {this.onInputChangeHandler} 
          addButtonHandler={this.addHandler} 
          clearButtonHandler={this.clearHandler}
          onKeyUp={this.onKeyUp}
        />
      </div>
    );
  }
}

export default App;
