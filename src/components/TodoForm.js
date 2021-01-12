import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue:''
        }
    }

    handleChanges = e =>{
        this.setState({
            inputValue: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleItemAdd(this.state.inputValue);
        this.setState({
            inputValue:''
        });
    }
    render(){
        return(
            <div className='form-container'>
            <form onSubmit={this.handleSubmit}>
               
                <input className='form-input' value={this.state.inputValue} onChange={this.handleChanges} type='text' name='item'/>
                <button className='add-btn'>Add</button>

            </form>
            </div>
        )
    }
}

export default TodoForm;