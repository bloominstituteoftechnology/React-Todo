import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const Button = styled.button`
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .2);
  background-color: #89bdd3;
  font-size: 1.8em;
  padding: 1px;
  color: #e3e3e3;
  box-sizing: border-box;
  border: 4px solid #9ad3de;
  transition: 0.5s;
  outline: none;
  border-radius: 8px;
  margin-top: 20px;
  padding: 5px;

  &:hover {
    border: 9px solid #89bdd3;
    background-color: #9ad3de;
    color: #e3e3e3;
  }
  &:active {
    background-color: #c9c9c9;
    transform: translateY(4px);
  }
`

const Item = styled.div`
  font-size: 2rem;
  margin-top: 20px;
  background-color: #89bdd3;
  border: 6px solid #9ad3de;
  color: #e3e3e3;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .2);
  text-decoration-color: black;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
  font-family: Courier New, Courier, monospace;
  font-weight: 200;
  padding: 5px;
`
class Todo extends Component {
  constructor(todo) {
    super();
      this.state = {
        todo: todo,
        clicked: false
      };
    }
    handleClick = () => {
      this.setState({ clicked: !this.state.clicked });
    }
    delete = () => {
      console.log('delete it');
    }

  render() {
    const styles = this.state.clicked ? { textDecoration: 'line-through', textDecorationColor: '#9ad3de'} : { textDecoration: 'none' };
      return (
        <Wrapper>
          <Button onClick={this.delete}>Delete</Button>
          <Item style={styles} onClick={this.handleClick}>
            {this.props.todo}
          </Item>
        </Wrapper>
      );
    }
}
export default Todo;