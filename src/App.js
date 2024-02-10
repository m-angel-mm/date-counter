import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(1);
  const [step, setStep] = useState(0);
  const date = new Date();

  date.setDate(date.getDate() + counter);

  function decreaseCounter() {
    setCounter((c) => c - step);
  }

  function increaseCounter() {
    setCounter((c) => c + step);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={decreaseCounter}>-</button>
        <input
          type="text"
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
        />
        <button onClick={increaseCounter}>+</button>
      </div>
      <span>{date.toString()}</span>
      <div>
        <button>reset</button>
      </div>
    </div>
  );
}

export default App;
