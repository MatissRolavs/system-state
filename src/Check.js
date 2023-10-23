import{ useState } from "react";
function Check(props){
    const [checkBox, setCheckBox] = useState(props.checked);
    function handleCheckBox(event){
        setCheckBox(event.target.checked);
    }
        return(
            <>
                <input type="checkbox" checked={checkBox} onChange={handleCheckBox}></input>
            </>
        )
    }
export default Check;