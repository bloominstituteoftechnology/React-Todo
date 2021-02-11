import React from 'react';
import styled from 'styled-components';

class TodoForm extends React.Component {
    constructor (props) {
        super ();
        this.addTodo = props.addTodo;
        this.state ={
            task: ""      //task is the name a new task to be added to the state
        } 
        console.log(props)
    }

    formSubmit = e => {
        e.preventDefault();
        this.addTodo(this.state.task);
        this.setState({task: ""});
    }

    handleChanges = e => {
        this.setState({...this.state, task: e.target.value})
    }
   
    render() {
        return (
            <FormDiv>   
                <form onSubmit={this.formSubmit}>
                    <input 
                        type="text"
                        name="task"
                        id="task"
                        placeholder="Enter new task"
                        onChange={this.handleChanges}
                        value= {this.state.task}
                    />
                    <button>Add Task</button>
                </form>
            </FormDiv> 
    
        )
    }
}

const FormDiv = styled.div`
    width: 50vw;
    height: 5vh;
    display: flex;
    justify-content: center;

    form {
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items:center;
    }

    button {
        font-family:courier;
        font-size: 1.5rem;
        color: white;
        background: rgb(0, 0, 85);
        height: 100%;
        width:50%;
        border-radius: 1vh;
    }

    input {
        height: 50%;
        width:50%;
        font-size: 1rem;
        border-radius: 1vh;
        background: lightyellow;
    }
`

export default TodoForm