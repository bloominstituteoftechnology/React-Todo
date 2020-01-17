import React from "react";

class TodoForm extends React.Component{
 
    constructor (){
        super()
        this.state={
            newText: ""
        }
    }
    
    handleInputChange=e=>{
        this.setState({...this.state, newText: e.target.value})
    }

    handleSubmit =e=>{
        e.preventDefault();
        this.props.addNewItem(this.state.newText)
        this.setState({...this.state, newText: ""})
        
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
                <button 
            ClassName="clear-btn"
            onClick={this.props.clearTodo}> Clear Todo </button>
                </form>
                

           
            
        )
    }
}

 export default TodoForm;