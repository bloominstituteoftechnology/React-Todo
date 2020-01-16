import React from "react";

class TodoForm extends React.Component{
 
    constructor (){
        super()
        this.state={
            newText: ""
        }
    }
    
    handleInputChange=e=>{
        this.setState({...this.state, newText :e.target.value})
    }

    handleSubmit =e=>{
        e.preventDefault();
        this.props.addNewItem(this.state.newText)
        
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                onChange={this.handleInputChange}
                type="text"
                name="ToDo"
                value={this.state.newText}
                />
                
                <button > Add</button>

            </form>
        )
    }
}

 export default TodoForm;