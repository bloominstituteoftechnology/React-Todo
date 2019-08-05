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
        event.preventDefault();
        this.setState({ item: ''});
        this.props.addItem(event, this.state.item)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                
                <input 
                    placeholder="...Todo"
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Add Todo</button>
                <button>Clare Completed</button>
            </form>
        )        
    }
}

export default TodoForm;