import React from 'react';

class TodoForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            inputText: ''
        }
    }
    changeHandeler = (event) => {
this.setState({inputText: event.target.value});
    }
    
    render(){
        return (
        <form>
            <input
             type="text"
             value={this.state.inputText}
             onChange={this.changeHandeler}
            />
            <button type="submit">Add Todo</button>
            <button>Clear Todos</button>
        </form>
        );
    }
}

export default TodoForm;