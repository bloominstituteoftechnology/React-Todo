import React from 'react';
import TodoList from'./components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  const listTodos=[{
    task:'',
    id:Date.now(),
    completed:false
  }]
  class App extends React.Component{
  constructor(){
    super();
    this.state={
        todos:listTodos,
        todo:''
    }
  }

  submitTodo=event=>{
    

  };
  inputTodo=event=>{
    this.setState({todo:event.target.value});
  };
  toggleTodo=(id)=>{
  
  };
  clearTodo=event=>{
    
  }
  

                render() {
                  return (
                          <div>
                            <h1>
                              <TodoList 
                                        todos={this.state.todos} 
                                        toggleTodo={this.toggleTodo}/>
                            </h1>
                              
                              <TodoForm 
                                        value={this.state.todo} 
                                        handlerInputTodo={this.inputTodo}
                                        handlerSubmitTodo={this.submitTodo}
                                        clearTodoHandler={this.clearTodo}/>
                        </div>
                )
              }
            }
                      
                      

    
  
  



export default App;
