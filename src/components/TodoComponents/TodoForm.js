import React from 'react';
import Todo from './Todo';
import TodoList from './TodoList';
 

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
   
   submitHandler = event => {
    event.preventDefault();
     this.props.Submit(this.state.inputText)
    this.setState({inputText: ""}) 
   }
  
   render(){
    return(
    <div className='buttons'>
      <form onSubmit = {this.submitHandler}>
        <input className="w3-hover-white" type = "text" placeholder = "ENTER NEW TASK HERE!" value = {this.state.inputText} onChange = {this.changeHandler}></input>
        <button className="w3-hover-green" id='submit' type = "submit" >ADD TASK</button>
        <button className="w3-hover-red" type = "button" onClick = {this.props.clearHandler}>CLEAR COMPLETED</button>
      </form>
    </div>
    );
  }
};
         
 
export default TodoForm;