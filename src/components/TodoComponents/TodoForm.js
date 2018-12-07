import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: ""
    }
  }

  changeHandler = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  addTaskMethod = event => {
    event.preventDefault();

    this.props.addTask(this.state.inputText)
    this.setState({inputText: ""}) 

  }
  render(){
    return(
      <form onSubmit = {this.addTaskMethod}>
        <input type = "text" 
	        placeholder = "Add Task" 
	        value = {this.state.inputText} 
	        onChange = {this.changeHandler}></input>

        <button type = "submit" >Add Task</button>
        <button 
        	type = "button" 
        	onClick = {this.props.clearHandler}>Clear Todos</button>

      </form>
    );
  }
};

        

export default TodoForm;