import React, { useState } from "react";

const Eight = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (input!== '') {
      setTodos([...todos, input]);
      //setInput('');
    }
  };
  const removeTodo=(index)=>{
    const updatedTodos= todos.filter((_,i)=> i!== index);
    setTodos(updatedTodos);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={addTodo}>ADD</button>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>
            {todo}
            <button onClick={()=>removeTodo(index)}>Remove</button>
          </li>
        })}
      </ul>
    </div>
  );
};

export default Eight;
