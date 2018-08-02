//<App /> will hold all the data needed for this project. It will also be the container for your Todo Components.
//All of your application data will be stored here on <App />.
// All of your handler functions should live here on <App />.


import React from 'react';
import TodoForm from './TodoComponents/TodoForm';
import TodoList from './TodoComponents/TodoList';
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  const todoListArr = [
    { task: 'Organize Garage',
      id: new Date(),
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: new Date(),
      completed: false
    },
  ];


  // const task = props => {
  //   const{task, id, completed} = props.taskProp;
  //   return (
  //     <div>task: {task}</div>
  //   );
  // };


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: todoListArr,
      inputValue: '',
      color: 'blue',
    };
  }  

    //functions below
  
  
  updateTodoListItems = task => {
      const newTodos = this.state.list.slice();
      newTodos.push({
        task:this.state.inputValue, 
        id: Date.now(), 
        completed: false,
      }
    );

  }

  updateInputValue = event => {
    // console.log(event.target.value);
    const { value } = event.target 
    this.setState({inputValue: value} );

  }

  submitNewTask = event => {
    event.preventDefault();
    
    this.setState(prevState => ({
      list: prevState.list.concat({
        id: new Date(),
        task: prevState.inputValue,
        completed:false,
      }),
      inputValue: ""
    }));
  };



  toggleCompletedTodos = () => {
    console.log("I am clicking");
    
    
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        {/*todo view will be shown here*/}
        {/*input will be shown here*/}
        {/*add button view will be shown here*/}
        {/*clear button will be shown here*/}
        <TodoList taskList={this.state.list}
        handleToggleComplet={this.state.toggleCompletedTodos}/>
        <TodoForm 
          inputValue={this.state.inputValue}
          updateInputValue={this.updateInputValue}
          submitNewTask={this.submitNewTask}
          />
      </div>
    );
  }
}



//creating pull request

export default App;
