import React, { Component } from 'react';
import {titleStyle, ulStyle, liStyle, spanStyle, formStyle, inputTextStyle, inputButtonStyle, liStyleCompleted} from './styles.js'


const Todo = (props) => {
    return (        
        <div>
            <h1 style={titleStyle}> ToDo List Project </h1>
            <ul style={ulStyle}>
                { props.list.map((item, i) => 
                <li onClick={props.handleComplete} data-set={i} style={item.completed? liStyleCompleted : liStyle} key={i}>{item.text}
                    <span style={spanStyle} data-set={i} key={i} onClick={props.handleRemove}> X</span>
                </li>) }
            </ul>
            <form style={formStyle} onSubmit={props.handleSubmit} >    
                <input style={inputTextStyle} type="text" onChange={props.handleListChange} value={props.inputValue} />
                <input style={inputButtonStyle} type="submit" value="ADD TO LIST" />
            </form>            
        </div>
    );
};

export default Todo;