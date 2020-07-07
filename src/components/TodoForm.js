import React from 'react'

 class TodoForm  extends React.Component {
    constructor(){
        super();
        this.state = {
            newTaskList: ""
            
        };
    }
   
    handleChange = evt =>{
        this.setState({
           newTaskList : evt.target.value
        });
      }
    handleSubmit = evt =>{
        evt.preventDefault();
        this.props.addTodo(this.state.newTaskList);
        this.setState({
        newTaskList: ""
        });
    };
      
    render(){
         return(
             <div className="form-component">
                <form>
                <input 
                    type="text"
                    name="todo"
                    value={this.state.todo}
                    onChange={this.handleChange}
                    placeholder="...todo"
                />
               
                </form>
                
                    <button onClick={this.handleSubmit}>Add Todo</button>
                    <button onClick={this.props.handleClear} >Clear Completed</button> 
                
            </div>
         )
     
    }

}
 export default TodoForm;