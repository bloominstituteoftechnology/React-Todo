import React from 'react';
import styled, { css } from 'styled-components';

const StyledTodoForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1rem;

  p {
    color: red;
    min-height: 19px;
    width: 100%;
  }

  div {
    position: relative;
    display: flex;
  }

  label {
    position: absolute;
    z-index: 100;
    left: 20px;
    top: 9px;
    transition: 200ms;
    color: rgb(100, 100, 100);
    &:hover {
      cursor: text;
    }
  }

  button {
    background-color: transparent;
    outline: none;
    border: 2px solid white;
    color: white;
    padding: 10px 0;
    min-width: 200px;
    margin-left: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledInput = styled.input`
  border: none;
  padding: 10px;
  transition: 200ms;
  font-weight: 500;

  &::placeholder {
    opacity: 0;
  }

  &:focus + label {
    transform: translate3d(-30px, -28px, 0) scale(0.75);
    color: white;
  }

  ${props =>
    props.dirty &&
    css`
      label {
        color: white;
        transform: translate3d(-30px, -28px, 0) scale(0.75);
      }
    `}
`;

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      error: false,
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e, todo) => {
    e.preventDefault();

    const todoLength = todo.replace(/\s/g, '').length;
    if (todoLength === 0) {
      !this.state.error && this.setState(prevState => ({ error: !prevState.error }));
      return false;
    } else {
      this.setState({ error: false });
    }

    e.target[1].focus();
    this.props.addTodo(todo);
    this.setState({
      todo: '',
    });
  };

  render() {
    return (
      <StyledTodoForm onSubmit={e => this.handleSubmit(e, this.state.todo)}>
        <div>
          <div>
            <StyledInput
              type='text'
              value={this.state.todo}
              onChange={e => this.handleChange(e)}
              name='todo'
              placeholder='New todo title'
              id='todo'
              dirty={this.state.todo.length > 0}
            />
            <label htmlFor='todo'>New todo title</label>
          </div>
          <button type='submit'>Add Item</button>
        </div>
        <p>{this.state.error && `Please add a meaningful title`}</p>
      </StyledTodoForm>
    );
  }
}

export default TodoForm;
