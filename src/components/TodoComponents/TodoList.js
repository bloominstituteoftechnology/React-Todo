// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:'',
            items:[]
        };
    }
}
const List =props=>{
    <ul>
        {
            props.items.map((item,index)=>
            <li key={index}>{item}</li>
        )
        }
    </ul>
    
    };
export default List;
