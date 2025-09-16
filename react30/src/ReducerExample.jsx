import React, { useReducer } from 'react'

const Actions={
    Increment:'increment',
    Decrement: 'decrement'
}
const reducer=(state, action)=>{
    switch(action.type){
        case Actions.Increment:
            return {count: state.count+1};
        case Actions.Decrement:
            return {count: state.count-1};   
         default :
            return state;    
    }
    
}

const ReducerExample = () => {
    const[state, dispatch]= useReducer(reducer, {count:0});
  return (
    <div>
      <button onClick={()=>dispatch({type:Actions.Increment})}> +</button>
      <span>{state.count}</span> 
      <button onClick={()=>dispatch({type:Actions.Decrement})}> -</button>
    </div>
  )
}

export default ReducerExample;
