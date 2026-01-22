import React, { useState } from "react";
import axios from "axios"
interface Posting{
    title: string,
    body: string,
}

export const Practice: React.FC=()=>{
    const API_End = "https://jsonplaceholder.typicode.com/posts"
    const [value, setValue] = useState<string>();

    const [topost, setToPost] = useState<Posting>({
        title:"",
        body:"",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setValue(e.target.value)
    }
    const submitForm =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    }
    const handlepost=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = e.target;
      setToPost((prev)=>({
        ...prev,
        [name]:value
      }));
    }

    const postData=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        try{
            const res = axios.post(API_End,{
                title: topost.title,
                body: topost.body
            })
            console.log("Posted data:", (await res).data);
            setToPost({ title: "", body: "" });
        }
        catch(err){
            console.log(err)
        }

        

    }
    return(
        <>
        <form onSubmit={submitForm}>
        <h1>{value}</h1>
        <input type="text" value={value} placeholder="Enter anything" onChange={handleChange} />
        <input type="text" value={value} placeholder="Enter anything" onChange={handleChange} />

        </form>

        <br />
        <form onSubmit={postData}>
            <input type="text" name="title" value={topost.title} placeholder="Title" onChange={handlepost} />
            <br />
            <input type="text" name="body" value={topost.body} placeholder="Body"onChange={handlepost} />
            <button type="submit">Post!</button>
        </form>
        </>
    )
}