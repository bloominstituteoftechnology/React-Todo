import React, {Component} from 'react';

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
        this.props.addTodo(this.state.task)
        this.setState({
            task: ''
        })

    }

    render(){
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" onChange={this.changeHandler} value={this.state.task} />
                    <button>Add Todo</button>
                </form>
                <button>Clear Completed</button>

            </div>
        )
    }
}

export default TodoForm;