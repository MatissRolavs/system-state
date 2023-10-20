import{ useState } from "react";

function Hello(props){

const [helloText, setHelloText] = useState(props.name);
function handleHelloText(event){
    setHelloText(event.target.value);
}

return(
    <>
    <input type="text" value={helloText} onChange={handleHelloText} ></input> 
    <p>Hello,{helloText}</p>
    </>
)

}

export default Hello;