import React from 'react'

class TodoForm extends React.Component {
    
    state ={
            inputValue: ''
        }

handleChanges = e => {
    this.setState ({
        inputValue : e.target.value
    });
};

handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleItemAdd(this.state.inputValue);
    this.setState({
        inputValue: ''
    })
}

 render(){
     return (
            <form onSubmit ={this.handleSubmit}>
            <input value={this.state.inputValue} onChange={this.handleChanges} type='text' name ='task'></input>
            <button type ='submit'>Add</button>
            </form>

     )
 }
}

export default TodoForm