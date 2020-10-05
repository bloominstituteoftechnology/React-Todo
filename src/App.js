import React from 'react';
import FormInput from './components/TodoForm';
import BookList from './components/TodoList';


const books = [
  {
    title: "The Everything Box by Richard Kadrey",
    id: 1,
    completed: false 
  },
  {
    title: "The Taster by V.S Alexander",
    id: 2,
    completed: false
  },
  {
    title: "The Ten Thousands Doors of January",
    id: 3,
    completed: false
  },
  {
    title: "Dear Haiti, Love Alaine by Maika Moulite, Maritza Moulite",
    id: 4,
    completed: false
  }
]






class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books
    };
  }

  handleChanges = (event) => {
    this.setState(
      { ...this.state, title: event.target.value}
      );
  }

  // addNewBook = (book) => {
  //   const newBook = {
  //     title: book.title,
  //     id: Date.now(),
  //     completed: false
  //   }
  //   this.state.title(...books, this.newBook)
  // }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.books)
    // this.setState({...this.state, })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <FormInput handleChanges={this.handleChanges} submit={this.onSubmit}/>
        <BookList books={books}/>
      </div>
    );
  }
}

export default App;
