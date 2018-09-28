import React, {Component} from 'react';
import './TodoForm.css'

//props = props.addTodo
class TodoForm extends Component{

    state = {
        task: '',

    }


    changeHandler = (event) =>{
        this.setState({
            task: event.target.value
        })
    }

    submitHandler = (event) =>{
        event.preventDefault();
        //call addTodo of App.js
        if(this.state.task){
            this.props.addTodo(this.state.task)
        }

        this.setState({
            task: ''
        })

    }

    clearHandler = () =>{
        if(this.props.todos.length){
            this.props.clearCompleted(this.props.todos)
        }
    }

    render(){
        return (
            <div className='formContainer'>
                <form onSubmit={this.submitHandler}>
                    <input placeholder="...todo" type="text" onChange={this.changeHandler} value={this.state.task} />
                    <button>Add Todo</button>
                </form>
                <button className="clear-btn" onClick={this.clearHandler}>Clear Completed</button>

            </div>
        )
    }
}

export default TodoForm;