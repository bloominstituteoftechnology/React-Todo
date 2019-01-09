import React, { Component, Fragment } from 'react';

const ToDo = props => {
  return (
    <div>
      {props.list.map(item => {
        return <div>{item.task}</div>;
      })}
    </div>
  );
};

export default ToDo;
