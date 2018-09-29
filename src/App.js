import React from 'react';
import TodoStyle from './components/TodoComponents/TodoStyle.css';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
      newTodo: "",
      todos: [{
          task: "",
          id: "",
          completed: false,
      }],

       }; //end state;

       valueHandler = (e) => {
            this.setState ({
              newTodo: e.target.value,
            });
  }//end valueHandler
  
 toggleCompletedFlag = (todoId) => {
   this.setState({
     todos: this.state.todos.map(item => {
       if (item.id === todoId) {
         return {
           task: item.task,
           id: item.id,
           completed: !item.completed,
         }
       } else {
         return item;
       }
     })
   })
 }


  submitHandler = () => {
    let data = {
      task: this.state.newTodo, 
      id: Date.now(),
      completed: false,
    };

    this.setState ({
      newTodo: "",
      todos: [...this.state.todos,  data ],
    })
  }; //end submitHandler


  checkHandler = () => {
    this.setState({
      todos: this.state.todos.filter(item => {
        return item.completed === !true;
          })
        })
}



  render() {
    
    return (  
      
      <div >
        <h1>My Todo List</h1>
        <TodoList

                          toggle = {this.state.toggleCompletedFlag}
                          input={this.state.newTodo}
                          state={this.state}
                          todos={this.state.todos}
                          valueHandler={this.valueHandler}
                          submitHandler={this.submitHandler}
                           checkHandler={this.checkHandler}  />
       </div>
    );
  } //end render
} //end class app







export default App;
