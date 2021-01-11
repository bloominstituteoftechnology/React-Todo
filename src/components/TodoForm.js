import React, { Component } from 'react';
import styled from 'styled-components';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  changeHandler = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.setState({ inputValue: '' });
  };
  render() {
    return (
      <StyledForm onSubmit={this.submitHandler} autoComplete='off'>
        <input
          value={this.state.inputValue}
          onChange={this.changeHandler}
          type='text'
          name='todo'
          required
        ></input>
        <button>Add</button>
      </StyledForm>
    );
  }
}

export default TodoForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 15px;

  input {
    padding: 5px;
    margin: 10px;
    border-radius: 7px;
    border: none;
    text-align: center;
    width: 300px;
    background-color: #f7f9fb;
  }
  input:focus {
    box-shadow: 0 0 0 3px #e85a4f;
    outline: white;
    color: transparent;
    text-shadow: 0 0 0 black;
  }

  button {
    padding: 10px 15px;
    width: 100px;
    margin-top: 20px;
    border: none;
    border-radius: 7px;
    font-size: 1.5rem;
    color: #f7f9fb;
    background: #e98074;
  }

  button:hover {
    box-shadow: 0 0 0 3px #e85a4f;
    outline: white;
  }

  button:focus {
    box-shadow: 0 0 0 3px #e85a4f;
    outline: white;
  }
`;
