import React from 'react';
import Todo from "./components/TodoComponents/Todo.js"
import "./components/TodoComponents/Todo.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Its working",
      TodoList: [
        { entry: "Example" }
      ],
      color: "red",
      inputText: ''
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  changeColor = (event) => {
    event.preventDefault()
    this.setState({color: 'blue' })
  }
 changeHandler = event => {
   console.log(event.target.value)
   this.setState({ inputText: event.target.value})
 }

 addNewCharacter = (event) => {
   event.preventDefault()
   this.setState({TodoList: [...this.state.TodoList, {entry: this.state.inputText, style: ""}]})
   
 }

 setStyle = (index) => {
   this.setState({
     TodoList: this.state.TodoList.map(item, ind => {
       if (index !== ind) {
         return item;
       } else {
         return {
           ...name,
           style: name.style = "strikethrough"
         }
       }
     })
   })
 }

  render() {
    return (
        <div>
             
          <Todo
             changeColor={this.changeColor}
             changeHandler={this.changeHandler}
             list={this.state.TodoList} 
             style ={this.state.color}
             inputText= {this.state.inputText}
             addNewCharacter= {this.addNewCharacter}
          />
        </div>

    );
  }
}

export default App;
