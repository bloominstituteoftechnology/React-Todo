import React from 'react'
// import TodoList from './TodoList';
import "./Todo.css"

class TodoForm extends React.Component {
  constructor(props){
    super (props)
    this.state = {
      inputText:''
    }
  }
  changeHandler = (event) => {
    this.setState({inputText: event.target.value});
  }
  submitHandler = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state.inputText)
    this.setState ({inputText:''})
  }
  
  render(){
      return (
    <form>
      <input 
      required
      type = "text"
      value = {this.state.inputText}
      onChange = {this.changeHandler}
      
      />
      <button type="submit" onClick = {this.submitHandler} >Add Todo</button>
      <button type="submit" onClick = {this.props.cleared}>Clear Todos</button>
    </form>
)
  }
}
export default TodoForm;