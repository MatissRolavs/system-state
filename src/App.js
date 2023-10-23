import Counter from "./Counter.js";
import Hello from "./Hello.js";
import Check from "./Check.js";
import LabeledCheck from "./LabeledCheck.js";
function App() {
  const helloNames = ["Railijs","Jekabs","Oskars"];
  const counterResults = [7, 43, 101];
  const checkValues = [true, true, false];
  const labeledCheckValues = [{label: "Agree to the Policy", check: true}, {label: "Receive Offers", check: false}];
  
  const namesJSX = helloNames.map((name,index) =>{
    return  <><Hello key={index} name={name}/></>
    })
  const resultsJSX = counterResults.map((result,index) =>{
    return <><Counter key={index} result={result}/></>
  })
  const checkValuesJSX = checkValues.map((checkValue,index) =>{
    return <><Check key={index} checked={checkValue}/></>
  })
  const labeledCheckValuesJSX = labeledCheckValues.map((labeledCheckValue,index) =>{
    return <><LabeledCheck id={index} checked={labeledCheckValue.check} label={labeledCheckValue.label}/></>
  })
  
    return (
    <>
      {resultsJSX}
      {namesJSX}
      {checkValuesJSX}
      {labeledCheckValuesJSX}
    </>
  )
  }
export default App;
