import React from "react";

interface MyButtonProps{
    text: string,
    onClick:()=>void,
    onClick1?:()=>void
}

export const MyButton: React.FC <MyButtonProps>=(props)=>{
    // MyButton: React.FC for functional component
    return(
        <>
        <button onClick={props.onClick}>{props.text}</button>
        <button onClick={props.onClick1}>{props.text}</button>

        </>
    )


}