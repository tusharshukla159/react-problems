import React, { useReducer, useState } from "react";
import Todo from "./Todo";

export const Actions = {
  Add_Todo: "Add-todo",
  Toggle_Todo: "Toggle-Todo",
  Delete_Todo: "Delete-Todo",
};
const reducer = (todos, action) => {
  switch (action.type) {
    case Actions.Add_Todo:
      return [...todos, newTodo(action.payload.name)];
    case Actions.Toggle_Todo:
        return todos.map((todo)=>{
            if(todo.id === action.payload.id){
                return {...todo, completed: !todo.completed};
            }
             return todo;
        })  
    case Actions.Delete_Todo:
        return todos.filter((todo)=>todo.id!== action.payload.id);   
  }
};
const newTodo = (name) => {
  return { id: Date.now(), name: name, completed: false };
};
const TodosReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: Actions.Add_Todo, payload: { name: name } });
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
      </form>
      {todos.map((todo) => {
        return <Todo id={todo.id} todo={todo} dispatch={dispatch}></Todo>
      })}
      {console.log(todos)}
    </div>
  );
};

export default TodosReducer;
