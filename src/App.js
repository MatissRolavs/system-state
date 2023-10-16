import{ useState } from "react";
function App() {

  const [result, setResult] = useState(0);
  
  function addOne() {
    setResult(result + 1)
  }
  function removeOne() {
    setResult(result - 1)
  }
  return (
    <div className="App">
      <button onClick={addOne}>+1</button>
      <button onClick={removeOne}>-1</button>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
