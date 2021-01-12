import React from "react";



export default function TodoList (props) {
const items = props.items;

const listItems = items.map(item =>{
 
console.log(item)
return <div className="list" key={item.key}>
  <p onClick={(e) => props.toggleComplete(e)} className={'false'}>{item.text}</p>
  <button type="submit" onClick={ () => props.deleteItem(item.key)}> Clear Item</button>
</div>
})
 return(
   <div>{listItems}</div>
 )
}
