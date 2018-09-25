import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      formArr: [],
      count: 0,
      completed: false
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleCheck = e => {
    let { formArr } = this.state;
    console.log(e.id);
    console.log(formArr[0]);

    formArr[e.id].completed = true;
  };

  handleSubmit = e => {
    let { formArr, value, count, completed } = this.state;
    e.preventDefault();

    formArr.push({
      id: count,
      text: value,
      date: Date.now(),
      completed: completed
    });
    console.log(formArr[count]);
    console.log(formArr[0]);
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div className="App">
       <div>

         <TodoList list={this.state.formArr} />
        <TodoForm value={this.handle.value} submit={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default App;
