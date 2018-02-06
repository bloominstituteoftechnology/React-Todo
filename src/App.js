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
        item: 'Example ToDo'
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
    const toDoList = this.state.toDos;
    toDoList.push(this.state.newToDo);
    toDoList.counter++;
    this.setState({
      toDos: toDoList,
      newToDo: {
        id: toDoList.counter,
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
  return <li>{props.list.item}</li>
}


export default App;