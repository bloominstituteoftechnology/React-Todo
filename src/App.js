import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const todos= [
  {
  task:'Go for a Run',
  id:1,
  completed:false
},
{
  task:'Cook Meal',
  id:2,
  completed:false
},
{
  task:'Learn React',
  id:3,
  completed:false
},
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos : todos
    }
  }

addTask=(intask)=>{
this.setState({ 
  todos : [...this.state.todos,{task:intask, //spread open current todos []
    id:Date.now(),                           // add the new todo obj
    completed:false}]
})
}

toggleCompleted=(taskid)=>{
this.setState({
  todos: this.state.todos.map((item)=>{
      if(item.id === taskid){
        return ({...item ,completed :!item.completed});
      }return item 
    })
})
}

clearCompleted=()=>{
  this.setState({
    todos: this.state.todos.filter((item)=> !item.completed)
  })
}

searchTask=(search)=>{
this.setState({
  todos: this.state.todos.filter((item)=>item.task.toLowerCase().includes(search.toLowerCase()))
})

}
  render() {
    return (
      <div className="app" >
        <h2>Welcome to your Todo App!</h2>
        <TodoForm todos={this.state.todos}
        addTask={this.addTask}
        searchTask={this.searchTask}/>

        <TodoList todos={this.state.todos}
        toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted}/>
        
      </div>
    );
  }
}

export default App;
