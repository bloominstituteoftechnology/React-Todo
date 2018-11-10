import React from 'react';
import TodoList from "../src/components/TodoComponents/TodoList"
import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state= {
      todos: [
        {
          todo: "Do today's Homework",
          completed: false,
          style: ""
        },
        {
          todo: "Do React",
          completed: false,
          style: ""
        },
        {
          todo: "Drink Water!",
          completed: false,
          style: ""
        },
      ],
      task: "",
      id: "",
      newTask:"" 
    }
  }

  changeHandler = event => {
    console.log(event.target.name);
    this.setState({[event.target.name]: event.target.value})
  }

  addNewTask = event => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          todo: this.state.newTask,
          completed: false,
          style:""
        }
      ],
      newTask: ""
    });
  }

  taskCompleted = index => {
    let newTodo = this.state.todos.map((note, idx) => {
      if(idx === index && note.completed === false){
        return {
          todo: note.todo,
          completed: true,
          style: note.style === '' ? 'line' : ''
        }
      }
      else if(idx === index && note.completed === true){
        return {
          todo: note.todo,
          completed: false,
          style: note.style = ''
        }
      }
      else{
        return {
          todo: note.todo,
          completed: false,
          style: note.style = ''
        }
      }
    })

    console.log(newTodo)
    this.setState({
      todos: newTodo
    })
  };

    filterCharacter = index => {
      
      let filteredTodo = this.state.todos.filter((note, idx) => {
          if (idx === index && note.completed === true) {
            return {todo:note.todo};
          } else if (idx !== index && note.completed === false){
            return {todo : note.todo};
          } else {
            
          }

        })
      
      this.setState({
        todos: filteredTodo
      });
    };

  
  render() {
    //console.log(this.state.completed)
    return (
      <div>
        <h1>Todo List:-</h1>

        <div>
          <TodoList
            todos={this.state.todos}
            task={this.state.task}
            newTask={this.state.newTask}
            class={this.state.class}
            changeHandler={this.changeHandler}
            addNewTask={this.addNewTask}
            completed={this.state.completed}
            taskCompleted={this.taskCompleted}
            completed={this.state.completed}
            filterCharacter={this.filterCharacter}
            style={this.state.style}
          />
        </div>
      </div>
    );
  }
}

export default App;
