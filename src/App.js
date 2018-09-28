import React from "react"
import ReactDom from "react-dom"
import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"

class App extends React.Component {
  constructor (){
    super();

    this.state = {
      todos:[
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
      newTodo: ''
    }
  }

  handleClick = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            task: todo.task,
            id: todo.id,
            completed: !todo.completed
          }
        }

        else {
          return todo
        }
      })
      
    })
  }
        // eventValue: event.target.value,

  addTodo = event => {

    const newTodoCopy = this.state.todos.slice();
    
    newTodoCopy.push({task: this.state.newTodo, id: Date.now(), completed: false})
      this.setState({
        
        todos: newTodoCopy
          
      })


  }

  changeHandler = (event) => {

    this.setState({

      newTodo: event.target.value 

    })
  }
  
//   handleChange = () => {
//     this.setState = props => {
//       this.props.addTodo
//     }

// }
  
  render(){
    return(
      <div>
        <TodoList
        
         
        todos={this.state.todos}
        handleClick={this.handleClick} />
        <div></div>
      <TodoForm 
      addTodo={this.addTodo} 
        newTodo={this.newTodo}
        changeHandler={this.changeHandler}
      />
      </div>
    )
  }
}


export default App 