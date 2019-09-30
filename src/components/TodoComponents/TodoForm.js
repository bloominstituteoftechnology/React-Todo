import React from 'react';
import styled from 'styled-components';

const StyledInputContainer = styled.div`
  position: relative;
  padding-left: 15px;

  input {
    border: none;
    border-bottom: 2px solid black;
    padding: 10px;
    transition: 200ms;
    font-weight: 500;
    &::placeholder {
      opacity: 0;
    }
  }

  label {
    position: absolute;
    z-index: 100;
    left: 25px;
    top: 8px;
    transition: 200ms;
    &:hover {
      cursor: text;
    }
  }
`;

const StyledInput = styled.input`
  &:focus + label {
    transform: translate3d(-25px, -15px, 0) scale(0.6);
  }
  & + label {
    transform: ${props => (props.dirty ? 'translate3d(-25px, -15px, 0) scale(0.6)' : 'translate3d(0, 0, 0)')};
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
      <form onSubmit={e => this.handleSubmit(e, this.state.todo)}>
        <StyledInputContainer>
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
