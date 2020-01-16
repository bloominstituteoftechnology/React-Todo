import React from 'react';
//  import TodoForm from "./components/TodoComponents/TodoForm"



const items=[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

 
  constructor(){
    super()
    this.state={
       itemsList:""
     
      
      
    }
  }

  // addItems =newItem=>{
  //  this.setState({
  //    itemsList:[newItem]
  //  })
  // }
    
  
  

  handleInputChange=event=>{
  this.setState({itemsList:event.target.value})
  }

  handleSubmit=e=>{
    e.preventDefault()
    this.state.addItems(this.state.itemsList)

  }

  
  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{this.state.itemsList}</h2>
        <input 
        type="text" 
        placeholder="..todo"
        value={this.state.itemsList} 
        onChange={this.handleInputChange}/>
        <button onClick={this.handleInputChange}> Add To do</button>
        <button onClick={this.handleInputChange}> Remove To do</button>
        {/* <TodoForm addNewItem={this.addItems}/> */}

        
      </form>
    );
  }
}



export default App;
