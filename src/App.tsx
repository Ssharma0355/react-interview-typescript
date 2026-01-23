import React from "react";
import { Todo } from "./components/Todo";
import { MyButton } from "./components/Button";
import { OpenForms } from "./components/OpenForms";
import { Practice } from "./components/Todo/Practice";
import { PersonInfo } from "./components/PersonInfo";

export const App: React.FC =()=>{
  return (
    <>
    {/* <MyButton text={"Click me"}  onClick={()=>{console.log("button clicked")}} onClick1={()=>{console.log("Optional click")}}/> */}
    {/* <Todo />
    <Todo />
    <Todo />
    <Todo /> */}
    {/* <OpenForms />
    <Practice /> */}
    <PersonInfo />
    </>
  )


}