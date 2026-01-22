import React,{createContext} from "react";
const CounterContex =createContext<number | null>(null);

export const CounterProvider: React.FC =(props)=>{
    return(
        <CounterContex value={3}>


        </CounterContex>
    )
}