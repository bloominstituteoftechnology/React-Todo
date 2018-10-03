import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

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

  toggleCompleted = event => {
    console.log("hello!");
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
        />
      </div>
    );
  }
}

export default App;
