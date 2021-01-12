import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
          textInput:"",
          id:"",
          completed:false
        }
      }

    handleChanges = e => {
        this.setState({
          textInput:e.target.value
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAdd(this.state.textInput);
        this.setState({
            textInput:''
        })
    }
    render(){
        console.log(this.props)
        return(
            <form >
                <input onChange = {this.handleChanges}value={this.state.textInput} type='text' name='task'/>
                <button onClick={this.handleSubmit}>Add Task</button>    
                <button onClick ={this.props.handleClearClompleted}>Clear Clompleted</button>
            </form>
        )
    }
}

 export default TodoForm;