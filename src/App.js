import React from 'react';
import ListItems from './components/ListItems'

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';





class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.eItem = this.eItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  eItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
 render(){
  return (
    <>
    <div style={{ borderRadius:'1.2rem',width:'20%' ,padding:'1rem', margin:'1rem', border:'gray solid 1px'}}>
     
        <form  
  onSubmit={this.addItem}>
          <Input style={{display:'flex', width:'50%'}}placeholder="Enter a task" value= {this.state.currentItem.text} onChange={this.handleInput}></Input>
          <button><Button variant="contained" color="primary" >Add</Button></button>
        </form>
        <p > {this.state.items.text}</p>
        
          <ListItems style={{display:'flex', alignItems:'column'}} items={this.state.items} deleteItem={this.eItem} setUpdate={this.setUpdate}/>
    </div>
    </>
  );
 }
}


export default App;
