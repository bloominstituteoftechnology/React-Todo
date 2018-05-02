import React from 'react';

class XdOutList extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <ul>
                {props.tasks.map(task =>{return <li key="task" onClick={this.onClick.bind(this)}>{task}</li> })}
            </ul>
        );
    }
}

export default XdOutList;