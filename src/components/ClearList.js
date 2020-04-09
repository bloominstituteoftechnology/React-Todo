import React from "react";
import { Button } from "semantic-ui-react";

function ClearList(props) {
  return (
    <Button color="red" onClick={props.deleteAll}>
      Clear List
    </Button>
  );
}

export default ClearList;
