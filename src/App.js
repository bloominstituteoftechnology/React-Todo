import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const listItems = [
  
]

let nextId = 2
const getNewId = () => {
  nextId += 1;
  return nextId
}


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: listItems,
      inputText: '', 
      clicks: 0, 
      searchText: 'Yellow',
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSearch = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addItem = event => {
    event.preventDefault();
    this.setState({
      list: [
        ...this.state.list,
        { task: this.state.inputText, id: getNewId(), completed: false}
      ],
      inputText: ''
    });
  };
  searchItem = () => {
    this.setState({
      list: this.state.list.filter(item => {
        return item.task === this.searchText
      })
    })
  }
handleClick  = id => {
  this.setState({
    list: this.state.list.map(item => {
      if (item.id === id){
        return {
          ...item,
          completed: item.completed === true ? false : true
        };
      
      } else {
        return item;
      }
    })
  });
  }

strikeThrough = event => {
  if (event.target.className === 'strikethrough') {
    event.target.className = 'off'
  } else {
    event.target.className = 'strikethrough'
  }
} 

clearCompleted = (event) => {
  event.preventDefault();
  this.setState({
    list: this.state.list.filter(item => {
      return item.completed === false
    })
  })
}

  render() {
    return (
      <main>
       
        <TodoForm 
        addItem={this.addItem}
        inputText={this.state.inputText}
        handleChange={this.handleChange}
        clear={this.clearCompleted}
        searchText={this.state.searchText}
        handleSearch={this.handleSearch}
        searchItem={this.searchItem}
        />
        <TodoList 
        list={this.state.list}
        handleClick={this.handleClick}
        strikeThrough={this.strikeThrough}
        />
         <h1 className="heading">To Do List:</h1>
      </main>
    );
  }
}

export default App;
