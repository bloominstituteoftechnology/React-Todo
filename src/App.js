import React from 'react';

import TodoForm from "./components/TodoComponents/TodoForm"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        {listItem: ''}
      ],
      inputText: '',
      newListItem: '',
    }
  }
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  addNewListItem = event => {
    event.preventDefault();
    this.setState({
      listData: [
      ...this.state.listData,
        { listItem: this.state.newListItem }
      ],
      newListItem: ''
    })
  }

  render() {
    return (
      <div>
        <h1>To Do List: MVP</h1>
        <TodoForm 
        listData={this.state.listData}
        inputText={this.state.inputText}
        newListItem={this.state.newListItem}
        changeHandler={this.changeHandler}
        addNewListItem={this.addNewListItem}
        />
      </div>
    );
  }
}

export default App;
