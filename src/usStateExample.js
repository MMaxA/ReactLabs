import { React, useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    })
    //This is other variant of the code above
    setCounter(prev => prev + 1);
    
  }

  function decrement() {
    setCounter(counter -1 );
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-primary">+</button>
      <button onClick={decrement} className="btn btn-danger">-</button>
    </div>
  );
}

export default App;
