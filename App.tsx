import * as React from 'react';
import './style.css';

export default function App() {
  const initialState = 0;
  const [state, dispatch] = React.useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case 'ADD':
        return state + 1;
      case 'SUB':
        return state - 1;
        throw Error();
    }
  }
  return (
    <div>
      <h1>UseReduce!</h1>
      <button onClick={() => dispatch({ type: 'ADD' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'SUB' })}>Increment</button>
      {state}
    </div>
  );
}
