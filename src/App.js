import React from 'react';
// import './App.css';
import TodoList from './components/TodoComponents/TodoList';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <h1>What you gon' do today?</h1>
        <br />
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default App;