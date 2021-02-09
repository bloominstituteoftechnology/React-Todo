import React from 'react';
import ToDoList from './components/TodoList';
import styled from 'styled-components';

let data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      itemList: [],
      inputValue: ''
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      inputValue: e.target.value,
    });
  };

  addNewItem = (evt) => {
    evt.preventDefault();

    const newItem = {
      task: this.state.inputValue.trim(),
      id: Date.now(),
      completed: false
    };

    this.setState({itemList: [...this.state.itemList, newItem]});
    this.setState({inputValue: ''});
  };

  render() {
    return (
      <StyledContainer>
        <ToDoList list={this.state.itemList} addNew={this.addNewItem} handleChanges={this.handleChanges} inputValue={this.state.inputValue} toggleOff={this.toggleOff} />
      </StyledContainer>
    );
  };
};

const StyledContainer = styled.div`
  border: solid 1px blue;
  padding: 2%;
  font-family: sans-serif;
`;

export default App;
