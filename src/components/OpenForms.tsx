import React, { useState } from "react";

export const OpenForms: React.FC =()=>{
    const [value, setValue] = useState<string>();

   const handleNameChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    setValue(e.target.value)
   }

   const formSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(value);
    console.log(e)

   }
    return(
       <>
       <form onSubmit={formSubmit}>
       <h1>Value is: {value}</h1>
        <input onChange={handleNameChange} type="text" placeholder="Enter anything" value={value}/> 
        <button type="submit">Submit</button>
       </form>

       </>
    )
}