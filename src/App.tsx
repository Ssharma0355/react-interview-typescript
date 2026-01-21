import React from "react";
import { Todo } from "./components/Todo";
import { MyButton } from "./components/Button";

export const App: React.FC =()=>{
  return (
    <>
    <MyButton text={"Click me"}  onClick={()=>{console.log("button clicked")}} onClick1={()=>{console.log("Optional click")}}/>
    {/* <Todo />
    <Todo />
    <Todo />
    <Todo /> */}
    </>
  )


}