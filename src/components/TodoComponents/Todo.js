import React from "react";
import { Checkbox } from "semantic-ui-react";

const Todo = props => {
  return (
    <div>
      <Checkbox label={props.item.task} />
    </div>
  );
};

export default Todo;
