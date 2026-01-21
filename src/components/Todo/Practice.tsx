import React, { useState } from "react";

export const Practice: React.FC=()=>{
    const [value, setValue] = useState<string>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setValue(e.target.value)
    }
    return(
        <>
        <h1>{value}</h1>
        <input type="text" value={value} placeholder="Enter anything" onChange={handleChange} />
        </>
    )
}