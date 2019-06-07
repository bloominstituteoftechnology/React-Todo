import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listItem: ''
        }
    }

    changeHandler = (event) => {
        this.setState({listItem: event.target.value})
    }

    submitHandler = event => {
        event.preventDefault(); 
        this.props.addNewItem(this.state.listItem)
    }

    render(){
        return (
            <form>
             <input value={this.state.listItem} 
             placeholder='New Item' 
             type='text' 
             onChange={this.changeHandler} />
             <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;