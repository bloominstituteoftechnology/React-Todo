import React from 'react';

const App = () => (
  <div>
    <h2>Todo App!</h2>
    <ToDoList />
  </div>
);

class ToDoList extends React.Component {
  state = {
    toDos: [
      {
        id: 1,
        item: 'Example Item'
      }
    ],
    newToDo: {
      id: 2,
      item: '',
    },
    counter: 2,
  };
  
  addToDo = (event) => {
    event.preventDefault();
    const stateClone = this.state;
    stateClone.toDos.push(this.state.newToDo);
    stateClone.counter++;
    this.setState({
      toDos: stateClone.toDos,
      newToDo: {
        id: stateClone.counter,
        item: '',
      },
    });
  };

  acceptData = (event) => {
    let temp = this.state.newToDo;
    temp.item = event.target.value;
    this.setState({ newToDo: temp });
  };

  render() {
    return (
      <div>
        {this.state.toDos.map(each => {
          return <div><ListItem key={each.id} list={each} /></div>
        })}
        <form onSubmit={this.addToDo}>
          <input type="text" onChange={this.acceptData} placeholder="Add new item" value={this.state.newToDo.item} />
        </form>
      </div>
    );
  }
}

function ListItem(props) {
  return <li>{props.list.item}</li>;
}


export default App;