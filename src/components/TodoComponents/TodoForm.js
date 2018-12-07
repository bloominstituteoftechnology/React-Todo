import React from 'react';
import './Todo.css';
class ToDoForm extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            inputText:''
        }
    }

    //set the state Based off the targets name
    changeHandler= event=>{
        this.setState({[event.target.name]: event.target.value})
    }

    // call the add  to do  method from props and pass the text
    // from this component's state 
    submitHandler= event=>{
        event.preventDefault();
        this.props.addToDo(this.state.inputText);
        this.setState({ inputText: "" });
    }

    /*
        I want to keep the state of the form's input
        in this component  of this way I can update based off of its state instead of using
        document.querySelector('')

    */

    render(){ 
        return(
            <div className="form-wrapper">
                <form id="todo-form" action="">

                    <input type="text" 
                    name="inputText" 
                    id="todo-input"  
                    placeholder="enter a todo" 
                    value={this.state.inputText}
                    onChange= {this.changeHandler}
                    onSubmit={this.submitHandler}/>
                    
                    <button className="btn todo-button" onClick={this.submitHandler}>Add To Do</button>
                    <button className="btn todo-button" onClick={this.props.clearCompleted}>Clear Completed</button>
                </form>
            </div>
        )
    }
        
    
} 

export default ToDoForm;