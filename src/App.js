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
    console.log(e.target.id);
    

    formArr[e.target.id].completed = !formArr[e.target.id].completed;
    console.log(formArr[e.target.id]);
    if(formArr[e.target.id].completed === true){
      formArr[e.target.id].style='done';
    }else{
      formArr[e.target.id].style='';
    }

    this.setState(formArr);
  };

  handleSubmit = e => {
    let { formArr, value, count, completed } = this.state;
    e.preventDefault();

    formArr.push({
      id: count,
      text: value,
      date: Date.now(),
      completed: completed,
      style: ''
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
         
         <TodoList list={this.state.formArr} change={this.handleCheck}/>
        <TodoForm value={this.handleChange} submit={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}

export default App;
