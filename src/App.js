import React from 'react';
import TodoForm from './components/TodoComponents/TodoList'
import Todo from './components/TodoComponents/Todo'
// import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  inputElement = React.createRef()  
  constructor() {
    super();
    this.state = {
      listArray: [],
      currentItem: {text:'', key:'', completed:''}
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      listArray: filteredItems,
    })
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now(), completed: false }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.listArray, newItem]
      this.setState({
        listArray: items,
        currentItem: { text: '', key: '', completed: ''},
      })
    }
  }

  clearAll() {
    const clearedList = {text: '', key: '', completed: ''}
    this.setState({
      listArray: clearedList,
      currentItem: { text: '', key: '', completed: ''},
    })
  }
    

  render() {
    return (
      <div className="App">
        <TodoForm 
          addItem={this.addItem} 
          inputElement={this.inputElement} 
          handleInput={this.handleInput}
          currentItem = {this.state.currentItem} 
          clearAll = {this.clearAll}
          />
        <Todo 
          entries={this.state.listArray} 
          deleteItem={this.deleteItem}
          />
      </div>
    )
  }
}

export default App;

/////////////////////////////////////////////////////
// CODE FROM TUTORIAL

// class App extends React.Component {
//   inputElement = React.createRef()
//   constructor() {
//     super()
//     this.state = {
//       items: [],
//       currentItem: {text:'', key:''}
//     }
//   }

//   deleteItem = key => {
//     const filteredItems = this.state.items.filter(item => {
//       return item.key !== key
//     })
//     this.setState({
//       items: filteredItems,
//     })
//   }

//   handleInput = e => {
//     const itemText = e.target.value
//     const currentItem = { text: itemText, key: Date.now() }
//     this.setState({
//       currentItem,
//     })
//   }

//   addItem = e => {
//     e.preventDefault()
//     const newItem = this.state.currentItem
//     if (newItem.text !== '') {
//       console.log(newItem)
//       const items = [...this.state.items, newItem]
//       this.setState({
//         items: items,
//         currentItem: { text: '', key: ''},
//       })
//     }
//   }
  
 

//   render() {
//     return (
//       <div className="App">
//         <TodoList 
//           addItem={this.addItem} 
//           inputElement={this.inputElement} 
//           handleInput={this.handleInput}
//           currentItem = {this.state.currentItem} 
//           />
//         <Todo 
//           entries={this.state.items} 
//           deleteItem={this.deleteItem}
//           />
//       </div>
//     )
//   }
// }
// export default App