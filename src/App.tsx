import React from "react";
import { Todo } from "./components/Todo";
import { MyButton } from "./components/Button";
import { OpenForms } from "./components/OpenForms";
import { Practice } from "./components/Todo/Practice";
import { PersonInfo } from "./components/PersonInfo";
import { PostPerson } from "./components/PostPerson";
import { UserInfo } from "./components/practice/UserInfo";
import { AddUser } from "./components/practice/AddUser";
import { Hook1 } from "./components/hooks/Hook1";
import Parent from "./components/hooks/context/Parent";

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
    {/* <PostPerson />
    <PersonInfo /> */}
    {/* <UserInfo />
    <AddUser /> */}
    {/* <Hook1 /> */}
    <Parent />
    </>
  )


}