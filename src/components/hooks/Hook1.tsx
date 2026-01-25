// practing useState hook 

import React, { useState } from "react";
import { Hook2 } from "./Hook2";

export const Hook1: React.FC=()=>{
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState("Sachin")
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <button onClick={()=>setCount(count-1)}>Decrease</button>
            <Hook2 text={name} number={91123} />
        </div>
    )
}