import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import styled from 'styled-components';

const Doit = styled.div`
width: 30%;
height: 400px;
background: #E4E4EF;
color: #404267;
font-weight: bold;
text-align: center;
`

const itemData = [
  {
      task: 'create list',
      id: 1,
      completed: false
  },
  {
      task: 'add styles',
      id: 2,
      completed: true
  },
  {
    task: 'push to Github',
    id: 3,
    completed: true
},
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemData: itemData
    };
  }

  toggleItem = itemID => {
    this.setState({
      itemData: this.state.itemData.map(item => {
        if (itemID === item.id){
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addItem = itemText => {
    const newItem = {
      task: itemText,
      completed: false,
      id: Date.now()
    };

    this.setState({
      itemData: [...this.state.itemData, newItem]
    });
  };



  render() {
    return (
      <Doit>
        <h2>To Do App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList
          itemData={this.state.itemData}
          toggleItem={this.toggleItem}
          />
      </Doit>
    );
  }
}

export default App
