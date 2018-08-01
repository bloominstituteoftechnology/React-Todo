//<App /> will hold all the data needed for this project. It will also be the container for your Todo Components.
//All of your application data will be stored here on <App />.
// All of your handler functions should live here on <App />.


import React from 'react';
import TodoForm from './TodoComponents/TodoForm';
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state



  const task = props => {
    const{task, id, completed} = props.taskProp;
    return (
      <div>task: {task}</div>
    );
  };


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      todoList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
      ],
      newTodos: '',
      };
    };

    //functions below
  updateTodoState = () => {
      const newTodos = this.state.todoList.slice();
      newTodos.push({task:this.state.newTodo, id: Date.now(), completed: false})
      this.setState({todoList, todo: ''});
      
  };

  handleInputedTodos = () => {
    this.setState({todoList: {task:event.target.value, id: Date.now(), completed:false});
 
}





  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        {/*todo view will be shown here*/}
        {/*input will be shown here*/}
        {/*add button view will be shown here*/}
        {/*clear button will be shown here*/}
        <TodoForm />
      </div>
    );
  }
}
//creating pull request

export default App;
