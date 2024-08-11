import './App.css';
import {useState} from "react"

function App() {

  const [adad, setAdad] = useState(0);
  return(
    <div className='App'>
      <button onClick={() => {setAdad(adad + 1)}}>Increase</button>
      <button onClick={() => {adad > 0 && setAdad(adad - 1) }}>Decrease</button>
      <button onClick={() => {setAdad(0)}}>Set Zero</button>
      <h1>{adad}</h1>
    </div>
  );
}

export default App;
