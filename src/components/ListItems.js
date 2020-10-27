import React from 'react';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import DeleteIcon from '@material-ui/icons/Delete';


function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <FormControl   variant="outlined"   key={item.key}>
     <p>
         <Input variant="outlined" type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <DeleteIcon style={{margin:'10px'}} onClick={() => { 
            props.deleteItem(item.key)
        }}/> 

        </span>
     </p>
     
    </FormControl>})
    return <div>
        <p>
        {listItems}
        </p>
    
    </div>;
  }

  export default ListItems;