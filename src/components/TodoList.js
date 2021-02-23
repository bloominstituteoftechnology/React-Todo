// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import { render } from "@testing-library/react"
import React from "react"
import Item from './Todo'

const List = (props) => {

  return(
      <div ClasName = 'list'>
          {props.state.map(item => {
              return (
                  <Item key={item.id} item={item} onComplete={props.onComplete}/>
              )
          })}

      </div>
  )

}

export default List