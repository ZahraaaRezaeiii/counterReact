import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="App">
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => count > 0 && setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Set Zero</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
