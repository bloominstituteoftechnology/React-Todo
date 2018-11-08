import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchForm from './components/TodoComponents/SearchForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      listItems: JSON.parse(localStorage.getItem('savedState')),
      inputText: '',
      searchText: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addItem = event => {
    event.preventDefault();
    this.setState({
      listItems: [...this.state.listItems, {listItem: this.state.inputText, id: Date.now(), completed: false, display: true}
      ],
      inputText: ''
    });
  };

  markComplete = id => {
    this.setState({
      listItems: this.state.listItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: item.completed === true ? false : true
          };
        } else {
          return item;
        }
      })
    });
  };
  
  clearCompleted = ev => {
    ev.preventDefault();
    this.setState({
      listItems: this.state.listItems.filter(
        item => !item.completed
      )
    });
  };

  searchItems = ev => {
    ev.preventDefault();
    this.setState({
      // listItems: this.state.listItems.filter(
      //   item => item.listItem.includes(`${this.state.searchText}`)
      // )
      listItems: this.state.listItems.map(item => {
        if(!item.listItem.toUpperCase().includes(`${this.state.searchText.toUpperCase()}`)){
          return{...item, display: false}
        }
        else{
          return {...item, display: true};
        }
      })
    });
  };

  clearSearch = ev => {
    ev.preventDefault();
    this.setState({
      listItems: this.state.listItems.map(item=> {
        return {...item, display: true};
      })
    })
  }

  componentDidUpdate() {
    localStorage.setItem('savedState', JSON.stringify(this.state.listItems));
  }

  render() {
    return (
      <div>
        <SearchForm searchText={this.state.searchText}
        handleChange={this.handleChange}
        searchItems={this.searchItems}
        clearSearch={this.clearSearch}
        />

        <TodoList todoItems={this.state.listItems} 
        markComplete={this.markComplete}/>

        <TodoForm addListItem={this.addItem} 
        inputText={this.state.inputText}
        clearCompleted={this.clearCompleted}
        handleChange={this.handleChange} />


      </div>
    );
  }
}

export default App;
