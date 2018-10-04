import React from 'react';
import todolist from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state = {
      Todo:todolist,
      Todos:''
    }
  }
  handleUpdateStateEnter = event => {
    const value = event.target.value
    let Todolist = this.state.Todo.slice();
    Todolist.push({
        id:Todolist.length,
        task:value,
        completed:false
      })
    this.setState( () => {
     return {
        Todos:value
      }
    })
    if(event.keyCode === 13){
      this.setState(() => {
        return{
          Todo:Todolist,
      }
      })
      this.setState( () => {
        return{
          Todos: "",
        }
      })      
      event.preventDefault();      
    }
    
  }

  handleUpdateStateButton = (event) => {
    let Todolist = this.state.Todo.slice();
    Todolist.push({
        id:Todolist.length,
        task:this.state.Todos,
        completed:false
      })
    this.setState( () => {
      return{
        Todo:Todolist,
      }
    })
   this.setState( () => {
     return{
        Todos:"",
     }
   })
    
    event.preventDefault();
  }

  clickComplete = (id) => {
    let Todolist = this.state.Todo.slice();
    Todolist.map ( item => {
      if(item.id === id) {
       return item.completed = !item.completed
      } else {
        return item;
      }
      
    })
    this.setState( {Todo: Todolist})
  }

  clear = (event) => {
    event.preventDefault();
    let Todolist = this.state.Todo.slice();
    Todolist = Todolist.filter( item => {if(item.completed === false){
      return item
    } else {
      return null
    }})
    console.log(Todolist);
    this.setState({Todo: Todolist})
  }

  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      <TodoList list={this.state.Todo} clickComplete={this.clickComplete}/>
      <TodoForm  clear ={this.clear} func={this.handleUpdateStateEnter} buttonfunc={this.handleUpdateStateButton} value={this.state.Todos}/>
      </div>
    );
  }

}

export default App;
