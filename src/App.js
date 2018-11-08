import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import Form from './components/TodoComponents/TodoForm';
import SearchBar from  './components/SearchBar';



const toDo = [
  {toDoItem: 'mop', completed: false, id: 0},
  {toDoItem: 'sweep ', completed: false, id: 1},
  {toDoItem: 'cook', completed: false, id: 2}
];

let nextId = 2;

const getNewId = () => {
  nextId += 1;
  return nextId;
};

class App extends React.Component {
  constructor () {
    super();
    this.state = { //STEP 1. set the state to hold the data
      toDoItems: toDo,  //holds the toDo array
      inputText: '',
      formInput: ''  // FORM-STEP 1. empy string to be updated when someone enters something in the form's input field
    }
  }

  handleChange = event => {
    // console.log(this.state.toDoItems)
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addItem = event => {
    event.preventDefault();
    this.setState({
      toDoItems: [
        ...this.state.toDoItems, 
        { toDoItem: this.state.inputText, completed: false, id: getNewId() }
      ], 
      inputText: ''
    }) 
  }

  changeComplete = id => {
    
    this.setState({
      toDoItems: this.state.toDoItems.map(toDoItem => {
        if (toDoItem.id === id) {
          return {
            ...toDoItem, completed: toDoItem.completed === false ? true : false
          };
        } else {
          return toDoItem;
        }
      })
    })
  }
  
  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      toDoItems: this.state.toDoItems.filter( task => task.completed === false)})
  }

  handleFormChange = event => {
    // console.log(this.state.formInput)
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

    let filteredSearch = toDo;

    if (this.state.formInput !== '') {
      return filteredSearch = filteredSearch.filter(searchItem => {
        searchItem.toDoItem.toLowerCase().includes(this.state.formInput.toLowerCase())
      })
        
    }


    return (
      <div className='App'>
        <SearchBar 
          formInput={this.state.formInput}
          handleFormChange={this.handleFormChange}
          />
        <h2 className='title'>Today's Todo's!</h2>
        <TodoList 
        toDoItems={this.state.toDoItems}
        changeComplete={this.changeComplete}  /*STEP 2. GIVE ACCESS TO THE TODOLIST --adds toDo array to the TodoList component. toDoItems becomes prop of TodoList (GOT TO TODOLIST FOR NEXT STEP)*/
        />    
        <Form 
            inputText={this.state.inputText} /*this is where the form gets access to whatever we put in the input field */
            addItem={this.addItem} 
            handleChange={this.handleChange} 
            clearCompleted={this.clearCompleted}
          />
      </div>
   );
      }
}

export default App;
