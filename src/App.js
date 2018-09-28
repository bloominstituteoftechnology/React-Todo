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
        console.log(todo)
        if (todo.id === todoId) {
          console.log(todoId)
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

  addTodo = () => {

    const newTodoCopy = this.state.todos.slice();
    // newTodoCopy is a copy of the todos array declared in state.
    
    newTodoCopy.push({task: this.state.newTodo, id: Date.now(), completed: false})
    // newTodo is pushing a new task object to itself.
      this.setState({
        // Set state queues up change to component state, and tells react it needs to call render
        // again and update the state of the component. It should be thought of as a request, as opposed to a command, as it is asynchronous, and may not complete it's task as soon as it's called.
        todos: newTodoCopy

        // The change setState will be applying is a roundabout change to the todos array, by setting it to the new todos array, with the object pushed.

          
      },
      
      console.log(newTodoCopy) 
      )


  }

  changeHandler = (event) => {

    this.setState({

      newTodo: event.target.value 

    })
  }

  /*clearAll = () => {

    let emptyTodo = this.state.todos.slice()

    this.setState(function (){
          
   if (emptyTodo !== 0){
     emptyTodo = []
     return emptyTodo
   } else {return emptyTodo}
  
    })
 this.state.todos = emptyTodo

  }*/
  
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

        // This is where the todos array is passed down from state, as a prop.
        handleClick={this.handleClick} />
        {/* This is where the handleClick function is being passed from state to props.  */}
        <div></div>
      <TodoForm 
      clearAll={this.clearAll}
       /* This is where the clearAll function is being passed from state to props. */
      addTodo={this.addTodo} 
       /* This is where the addTodo function is being passed from state to props. */
        newTodo={this.newTodo}
         /* This is where the newTodo string is being passed from state to props. */
        changeHandler={this.changeHandler}
         /* This is where the changeHandler function is being passed from state to props. */
      />
      </div>
    )
  }
}


export default App 