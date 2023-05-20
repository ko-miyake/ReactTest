import {ColorMessage} from "./components/ColorMessage";
import { Child1 } from "./components/Child1";
import { useState,useEffect } from "react";

export const App = () =>{
    // console.log("レンダリング");
    const [num,setNum] = useState(0);
    useEffect(()=>{
        alert();
    },[num]);

    const onClickButton = () => {
        // alert();
        setNum((prev) => prev + 1 );

        
    };
    return (  
        <>
            {console.log("TEST")}
            <h1 style={{color:"red"}}>hoge</h1>
            <Child1 />
            <ColorMessage color="blue">aa</ColorMessage>
            <ColorMessage color="red">aa</ColorMessage>
            <button onClick={onClickButton}>byutton</button>
            <p>{num}</p>
        </>
    )
}