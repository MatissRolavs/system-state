import Counter from "./Counter.js";
import Hello from "./Hello.js";
function App() {
  const helloNames = ["Railijs","Jekabs","Oskars"];
  
  const namesJSX = helloNames.map((name,index) =>{
    return  <><Hello name={name}/></>
    })
  
    return (
    <>
    <Counter></Counter>
    {namesJSX}
    </>
  )
  }
export default App;
