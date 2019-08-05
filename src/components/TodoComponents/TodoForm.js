import React from 'react'

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            item: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = event => {
        console.log('add button')
        event.preventDefault();
        this.setState({ item: ''});
        this.props.addItem(event, this.state.item)
    }
    
    render(){
        return(
           <div className="form">
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="...Todo"
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChange}
                />
                <button className="add-btn" onClick={this.handleSubmit}>Add Todo</button>   
            </form>
                <button className="clear-btn" onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
            
        )        
    }
}

export default TodoForm;