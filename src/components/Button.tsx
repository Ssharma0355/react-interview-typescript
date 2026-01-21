import React, { useState } from "react";

interface MyButtonProps{
    text: string, // required
    onClick:()=>void, // required
    onClick1?:()=>void // making optional
    optional?: string | number | boolean
}

interface MyState{
    state: number,
}

interface ChangeBook{
    name: string,
    price: number
}
export const MyButton: React.FC <MyButtonProps>=(props)=>{
    // MyButton: React.FC for functional component

    const {text, onClick} = props;
    // destructuring the props


    const [count, setCount] = useState<number>(0);
    //  using state with type

    const [book, setBook] = useState<ChangeBook>({
        name:"Sachin",
        price:100
    })
    
    return(
        <>
        <h1>{count}</h1>
        {/* <button onClick={props.onClick}>{props.text}</button> */}
        <button onClick={()=>setCount(count+1)}>{text}</button>
        {/* <button onClick={props.onClick1}>{props.text}</button> */}

        <br />

        <h1>Book is {book.name} and price is {book.price}</h1>
        <button onClick={()=>setBook({name:" Sharma", price:4000})}>Change Book</button>
        </>
    )


}