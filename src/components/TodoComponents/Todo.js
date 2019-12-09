import React from "react";
import { Checkbox } from "semantic-ui-react";
import styled from "styled-components";

const Todo = props => {
  return (
    <div>
      <Checkbox label={props.item.task} />
    </div>
  );
};

export default Todo;
