import React from 'react';
import './Todo.css';

const InputBox = props =>{
    return(
        <form>
            <input placeholder={props.task} onChange={props.updateStateMessage} />
        </form>
    );
};

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            inputField: '',
        };
    }

    render(){
        return(
            <div class='TodoForm'>
                <div class='inputBox'>
                    <InputBox task={this.state.inputField} updateStateMessage={this.updateStateMessage} />
                </div>
                <button onClick={this.clickHandler}>Add Todo</button>
                <button onClick={this.clickHandler}>Clear Completed</button>
            </div>
        );
    }

    messageChangeHandler = event =>{
        this.setState({inputField: 'event.target.value'});
    }

    clickHandler = event =>{
        console.log(event);
    }
}

export default TodoForm;