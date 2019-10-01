import React from 'react';
import styled, { css } from 'styled-components';

const StyledTodoForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;

  p {
    color: red;
    min-height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  div {
    position: relative;
    display: flex;
  }

  button {
    background-color: transparent;
    outline: none;
    border: 2px solid white;
    color: inherit;
    padding: 10px 0;
    min-width: 200px;
    margin-left: 20px;
    font-size: inherit;
    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledInput = styled.input`
  font-size: inherit;
  border: none;
  padding: 10px;
  transition: 200ms;
  width: 350px;
  color: #124149;
  &::placeholder {
    opacity: 0;
  }

  & + label {
    position: absolute;
    z-index: 100;
    left: 20px;
    top: 12px;
    transition: 200ms;
    color: #124149;
    &:hover {
      cursor: text;
    }
  }

  &:focus + label {
    transform: translate3d(-32px, -40px, 0) scale(0.75);
    color: white;
  }

  ${props =>
    props.dirty &&
    css`
      & + label {
        color: white;
        transform: translate3d(-32px, -40px, 0) scale(0.75);
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
