export const initialState = {

    todos: [
      { 
        item: 'Learn Reducers',
        completed: false,
        id: 7834834354
      }
    ]
  
  }
  
  const toggleItem = (id, todoList) => {
    const newList = todoList.map(item => {
      if(item.id === id){
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item;
      }
    })
    return newList
  }
  
  const removeItems = (todoList) => {
    const nonCompletedList = todoList.filter(item => {
      return item.completed === false;
    })
    return nonCompletedList
  }
  
  export const todoReducer = (state, action) => {
    switch(action.type){
      case "ADD_TASK":
        const newItem = {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
        return {
          ...state,
          todos: [...state.todos, newItem]
        };
  
        case "TOGGLE_COMPLETED":
          return {
            todos: toggleItem(action.payload, state.todos)
          }
  
        case "REMOVE_COMPLETED":
          return {
            todos: removeItems(state.todos)
          }
  
      default:
        return state
    }
  }