import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const TodoData =[
  {
    task:'Organize Garage',
    id:Date.now(),
    completed:false
  },
  {
    task: 'Bake Cookies',
    id: Date.now(),
    completed: false
  }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: TodoData,
      inputText:""
    };
  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todos:[
        ...this.state.todos,{task:this.state.inputText,id:Date.now(),
          completed:false}
      ],
      inputText:event.target.value
    })
  }

  handleChange = event => {
    this.setState({
      inputText:event.target.value
    })
  }

  clearTodo = () => {
    const todoItems = document.querySelectorAll("p")
    todoItems.forEach(ele => ele.classList.remove("strike-through"))
    const newState = this.state.todos;
    for(let i=newState.length-1;i>=0;i--){
      if(newState[i].completed===true){
        newState.splice(i,1)
      }
    }
    this.setState({ 
      todos: newState
    })
}

  strikeThrough = event => {
    event.target.classList.toggle("strike-through")
    this.state.todos.forEach((obj,index) => {
        if(obj.task===event.target.textContent){
          const newState = this.state.todos
          const compStatus = (obj.completed ? false : true)
          newState.splice(index,1,{task:obj.task,id:obj.id,completed:compStatus})
          this.setState({ 
            todos: newState
          })
        }
    })
  }
  
  
  render() {
    return (
      <section className="main">
        <h2>Todo List: MVP</h2>
        <TodoList strike={this.strikeThrough} todo={this.state.todos}/>
        <TodoForm 
          change={this.handleChange} 
          inputText={this.state.inputText}
          add={this.addTodo}
          clear={this.clearTodo}
        />
      </section>
    );
  }
}

export default App;
