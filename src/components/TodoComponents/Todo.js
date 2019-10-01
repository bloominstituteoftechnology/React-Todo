import React from "react";
import { isTemplateElement } from "@babel/types";

export default function Todo(props) {
  return (
    <div>
        <p
          onClick={() => props.toggleItem(props.item.id)}
          
        >
            {props.item.task}
        </p>
     
    </div>
  );
}
