import React from 'react';
import styled from 'styled-components';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state={
            textinput: ""
        }
    }

    handleChanges = e => {
        this.setState({
            textinput: e.target.value
        });
    };

    submitTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.textinput)
        this.setState({
            textinput: ""
        });
    }

    render(){
        return(
            <MainContain>
                <Form onSubmit={this.submitTodo} >
                    <Input type="text" value={this.state.textinput} onChange={this.handleChanges} name="todo" placeholder="input Todo here" size="70" maxLength="120" />
                    <Button>+Todo</Button>
                </Form>
            </MainContain>
        )
    }
}

export default TodoForm;

const MainContain = styled.div`
margin: 0px 0;
`

const Button = styled.button`
width: 20%;
height: 44px;
border: none;
cursor: pointer;
font-size: 1.2rem;
`

const Input = styled.input`
margin: 15px 0;
height: 42px;
border: none;
width: 77.5%;
`
const Form = styled.form`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
text-align: center;
`