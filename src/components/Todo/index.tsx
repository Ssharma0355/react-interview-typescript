import React from "react";
import { TodoItem } from "./TodoItem/Index";
import "./style.css"

export const Todo: React.FC =()=>{
    return(
        <div className="todo-container">Order List 
            <ol>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            </ol>
        </div>
    )
}