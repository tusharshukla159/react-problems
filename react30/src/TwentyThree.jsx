import React, { useEffect, useReducer } from "react";

const totalItemsPerPage = 5;
const reducer = (state, action) => {
  switch (action.type) {
    case "Set-Total-Items":
      return { ...state, totalItems: action.payload };
    case 'Set-Page':
        return {...state, currentPage: action.payload}
    default:
      return state;
  }
};
const data = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`);
  console.log(data);
const TwentyThree = () => {
  

  const [state, dispatch] = useReducer(reducer, {
    currentPage: 1,
    totalItems: 0,
  });
  useEffect(() => {
    dispatch({ type: "Set-Total-Items", payload: data.length });
  }, [data]);

  const startIndex = (state.currentPage - 1) * totalItemsPerPage;
  const endIndex = startIndex + totalItemsPerPage;
  const displayedItems = data.slice(startIndex, endIndex);
  const handleClick = (newPage) => {
    dispatch({ type: "Set-Page", payload:  newPage  });
  };
  return (
    <div>
      <h1>Pagination</h1>
      <ul>
        {displayedItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <div>
        <button
          onClick={() => handleClick(state.currentPage - 1)}
          disabled={state.currentPage === 1}
        >
          {" "}
          Previous
        </button>
        <button
          onClick={() => handleClick(state.currentPage + 1)}
          disabled={endIndex >= data.length}
        >
          {" "}
          Next
        </button>
      </div>
    </div>
  );
};

export default TwentyThree;
