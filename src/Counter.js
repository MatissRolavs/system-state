import{ useState } from "react";
function Counter(props) {

  const [result, setResult] = useState(props.result);
  const [change, setChange] = useState(1);
  
  function addOne() {
    setResult(result + parseInt(change))
  }
  function removeOne() {
    setResult(result - parseInt(change))
  }
  function handleChange(event){
    setChange(event.target.value);
  }
  return (
    <div className="App">
      <input type="number" value={change} onChange={handleChange}></input>
      <button onClick={addOne}>+{change}</button>
      <button onClick={removeOne}>-{change}</button>
      <h1>{result}</h1>
    </div>
  );
}

export default Counter;
