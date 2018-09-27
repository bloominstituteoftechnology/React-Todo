
import React from 'react';
import './Todo.css';

class ToDoForm extends React.Component{
    constructor(){
        super();
        this.state = {
        text: 'What needs to be done?',
    }  
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({text: event.target.value});
    }

    render(){
        return(
            <div className={'todoForm'}>
                <form className={"todoFormDisplay"}>
                    To do:{" "}
                    <input className={"todoFormInput"}  type="text" name="input" placeholder={this.state.text} onChange={this.handleChange}/>
                </form>
            
            
            </div>
        );
    }
}

export default ToDoForm