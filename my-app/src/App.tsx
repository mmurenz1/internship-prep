import { useReducer } from 'react';

interface State {
  count: number;
  error: string;
}

function reducer(state: State, action: string) {
  if (action === 'increment') {
    return { ...state, count: state.count + 1, error: '' };
  }
  if (action === 'decrement') {
    if (state.count === 0) {
      return { ...state, error: "Cannot go below 0!" };
    }
    return { ...state, count: state.count - 1, error: "" };
  }
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: "" });

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <p style={{ color: "red" }}>{state.error}</p>
      <button onClick={() => dispatch("increment")}>Add 1</button>
      <button onClick={() => dispatch("decrement")}>Minus 1</button>
    </div>
  )
}

export default App;