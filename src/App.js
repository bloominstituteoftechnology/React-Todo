import React from 'react';
import TodoList from'./components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'



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
    event.preventDefault();
    const todos=this.state.todos.slice();
    todos.push({ task:this.state.todo,
                 completed:false,
                 id: Date.now()});
                 this.setState({todos,todo:''});

  };
  inputTodo=event=>{
    this.setState({todo:event.target.value});
  };
  toggleTodo=(id)=>{
    this.setState(prevState=>{
      return{
        todos: prevState.todos.map(todo=>{
          if(id===todo.id){
            return{
              ...todo,completed:!todo.completed
            }
          } else return todo
        })
      }
    });
  };
  clearTodo=event=>{
    event.preventDefault();
    let todos = this.state.todos.slice();
    todos=todos.filter(todo=>!todo.completed);
    this.setState({todos});
  }
  

                render() {
                  return (
                          <div className='todoWhole'>
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
