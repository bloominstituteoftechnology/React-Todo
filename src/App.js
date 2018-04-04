// import React from 'react';
// import MovieList from './MoviesList'

// const InputField = () => {
//   return document.write("Hello")
// }

// const App = () => (

//   <div>
//     <h2>Todo App</h2>
//   </div>

// );
// const MovieList = props => {
//   return (
//       <ul>
//           {props.movies.map((movie,i) => {
//               return <li key={i}>{movie}</li>;
//           } )}
//       </ul>
//   )
// };
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       movies: ['Forest Gump', 'Blade Runner', 'Super Bad', 'Enemy of the State', 'The Matrix']
//     };
//   }
//   render() {
//     return <MovieList movies={this.state.movies} />

//   }
// }

// export default App;
import React, { Component } from 'react';

const styles = {
  fontFamily: "sans-serif",
  margin: "50px auto",
  maxWidth: '500px',
  width: "100%",
  fontWeight: "bold",
  border: "1px solid gray",
  padding: "20px",
  paddingLeft: "40px",
  paddingBottom: "40px",
  userSelect: "none",
  backgroundColor: "beige",
};
const newStyle = {
  marginLeft: '30px',
  color: 'blue',
  fontWeight: 'bold',
  // textDecoration: 'red underline',
  fontSize: '17px'
}

const itemClick = event => {
  if (event.target.style.textDecoration !== "line-through") {
    event.target.style.setProperty('text-decoration', 'line-through');
  } else {
    event.target.style.setProperty('text-decoration', 'none');
  }
};

const ListItem = props => {
  return (
    <li onClick={itemClick} key={props.key}>{props.item}</li>
  );
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      items: ['👕Do laundry', '🍕Eat lunch', '👨‍💻Study Preclass', ' 👨‍💻Complete React tutorials, outside resources', 'Go to store', '✨ Clean dishes', '👨‍💻Start studying CyberSecurity material']
    };
  }

  handleAddItem = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitItem = () => {
    const { items } = this.state;
    items.push('👨‍💻' + this.state.newItem);
    this.setState({ items, newItem: '' });
  };

  render() {
    return (
      <div style={styles}>
        <h2>🍕 👨‍💻Todo List 🍔</h2>
        <ul>
          {this.state.items.map((x, i) => <ListItem item={x} key={x + i} />)}
        </ul>
        <input
          type="text"
          name="newItem"
          value={this.state.newItem}
          placeholder="Add some list"
          style={newStyle}
          onChange={this.handleAddItem}
        />
        <button onClick={this.handleSubmitItem} style={newStyle} >Add List</button>
      </div>
    );
  }
}

export default App;