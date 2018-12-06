import React from 'react'


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
      type = "text"
      value = {this.state.inputText}
      onChange = {this.changeHandler}
      />
      <button type="submit" onClick = {this.submitHandler} >Add Todo</button>
      <button>Clear Todos</button>
    </form>
)
  }
}
export default TodoForm;