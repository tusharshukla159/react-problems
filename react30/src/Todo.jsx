import React from 'react'
import { Actions } from './TodosReducer'

const Todo = ({todo, dispatch}) => {
  return (
    <div>
      <span style={{color:todo.completed? 'black': 'yellow'}}>{todo.name}</span>
      <button onClick={()=> dispatch({type: Actions.Toggle_Todo, payload:{id: todo.id}})}>Toggle</button>
      <button onClick={()=> dispatch({type: Actions.Delete_Todo, payload:{id: todo.id}})}>Delete</button>

    </div>
  )
}

export default Todo
