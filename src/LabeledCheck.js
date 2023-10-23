import{ useState } from "react";
function LabeledCheck(props){
    const [checkBox, setCheckBox] = useState(props.checked);
    function handleCheckBox(event){
        setCheckBox(event.target.value);
    }
    return(
        
        <>
            <input type="checkbox" id={props.id} checked={checkBox} onChange={handleCheckBox}></input>
            <label htmlFor={props.id}>{props.label}</label>
        </>
    )
}
export default LabeledCheck;