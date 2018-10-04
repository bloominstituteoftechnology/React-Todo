import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listContent: [
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
      ], /* holds all items added to todo list */
      newListItem: '' /* item being added to list upon submit */
    }
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addNewListItem = event => {
    event.preventDefault();
    if (this.state.newListItem !== '') {
      this.setState({
        listContent: [
          ...this.state.listContent,
          {
            task: this.state.newListItem,
            id: createId(),
            completed: false
          }
        ],
        newListItem: ''
      });
    }

    function createId() {
      let id = Date.now();
      return id;
    }
  }

  toggleCompleted = (event, id) => {
    let listContentHolder = this.state.listContent;

    if(event.target.classList.contains('strikethrough')){
      listContentHolder.find((element) => element.id === id).completed = false;
    } else {
      listContentHolder.find((element) => element.id === id).completed = true;
    }

    event.target.classList.toggle('strikethrough');

    this.setState({
      listContent: listContentHolder
    });
  }

  clearCompleted = (event) => {
    event.preventDefault();

    let listContentHolder = this.state.listContent;

    listContentHolder = listContentHolder.filter((listItem) => listItem.completed === false);

    this.setState({
      listContent: listContentHolder
    });
  }

  render() {
    return (
      <div className="App">
        <TodoList
          listContent={this.state.listContent}
          newListItem={this.state.newListItem}
          changeHandler={this.changeHandler}
          addNewListItem={this.addNewListItem}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
