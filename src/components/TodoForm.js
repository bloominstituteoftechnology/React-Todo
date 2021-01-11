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
    

    render(){
        console.log(this.state)
        return(
            <div>
                <form>
                <input type='text' value={this.state.inputValue} onChange={this.handleInputChange}></input>
                <button>Add item to the todo list</button>
                </form>
            </div>
        )
    }

}
export default ToDoForm;
                