import React from 'react';

class ToDoForm extends React.Component{
    constructor(){
        super();
        this.state={
            inputValue:""
        };
    }
    handleInputChange=(e)=>{
        this.setState({
          inputValue:e.target.value
        });
      }
    
      handleSubmitAdd=(e)=>{
        e.preventDefault();
        this.props.handleAddTodo(this.state.inputValue);
        this.setState({
            inputValue:""
        })
    }

    render(){
 
        return(
            <div>
                <form onSubmit={this.handleSubmitAdd}>
                <input type='text' value={this.state.inputValue} onChange={this.handleInputChange}></input>
                <button>Add item to the todo list</button>
                </form>
            </div>
        )
    }

}
export default ToDoForm;
                