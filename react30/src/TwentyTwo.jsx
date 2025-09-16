import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Add-Task":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "Remove-Task":
      return state.filter((task) => task.id !== action.payload);
    case 'Toggle-Task':
        return state.map((task)=> task.id===action.payload?{...task,completed:!task.completed}:task)
    default:
      return state;
  }
};
const TwentyTwo = () => {
  const [text, setText] = useState("");
  const [tasks, dispatch] = useReducer(reducer, []);

  const addTask = () => {
    dispatch({ type: "Add-Task", payload: text });
    setText("");
  };
  const removeTask = (id) => {
    dispatch({ type: "Remove-Task", payload: id });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="add-task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={() => addTask()}>Add-Task</button>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <span onClick={()=>dispatch({type:'Toggle-Task', payload:task.id})} style={{textDecoration:task.completed?'line-through':'none'}}>{task.text} </span>
              <button onClick={() => removeTask(task.id)}>Remove Task</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TwentyTwo;
