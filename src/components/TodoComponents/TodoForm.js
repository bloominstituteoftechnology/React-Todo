import React from 'react';
import styled from 'styled-components';

const StyledInputContainer = styled.div`
  position: relative;

  input {
    border: none;
    border-bottom: 1px solid black;
    padding: 10px;
    transition: 200ms;
    &::placeholder {
      opacity: 0;
    }
    &:focus {
      border-color: blue;
    }
  }
  input:focus + label {
    transform: translate3d(-10px, -15px, 0) scale(0.6);
  }
  label {
    position: absolute;
    z-index: 100;
    left: 9px;
    top: 8px;
    transition: 200ms;
    transform: translate3d(0, 0, 0);
  }
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
    console.log('handleChange: ', e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e, todo) => {
    e.preventDefault();

    const todoLength = todo.replace(/\s/g, '').length;
    if (todoLength === 0) {
      this.setState(prevState => ({ error: !prevState.error }));
      return false;
    } else {
      this.setState(prevState => ({ error: false }));
    }

    e.target[1].focus();
    this.props.addTodo(todo);
    this.setState({
      todo: '',
    });
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e, this.state.todo)}>
        <StyledInputContainer>
          <input
            type='text'
            value={this.state.todo}
            onChange={e => this.handleChange(e)}
            name='todo'
            placeholder='New todo title'
            id='todo'
          />
          <label htmlFor='todo'>New todo title</label>
        </StyledInputContainer>
        <p>
          {this.state.error &&
            `You're trying to add a todo without a meaningful title. Please amend your todo and add a meaningful title.`}
        </p>
        <button type='submit'>Add Item</button>
      </form>
    );
  }
}

export default TodoForm;
