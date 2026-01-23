import axios from "axios";
import React, { useState } from "react";

interface Person{
    name:string,
    username:string,
    email:string
}

export const PostPerson: React.FC =()=>{
    const [user,setUser] = useState<Person>({
        name:"",username:"",email:""
    })

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {title, value} = e.target;
        setUser((prev)=>({
            ...prev,
            [title]: value 
        }))
    }

    const PostData = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            const response = axios.post("https://jsonplaceholder.typicode.com/users",{
                name: user.name,
                username: user.username,
                email: user.email
            })
            console.log("Posted data:", (await response).data); 
            setUser({name:"",username:"",email:""})
            }
        catch(err){
            console.log(err)
        }      

    }

    return(
        <div>
            <form onSubmit={PostData}>
                <input type="text" title="name" value={user.name} placeholder="Enter Name" onChange={handleChange} />
                <br />
                <input type="text" title="username" value={user.username} placeholder="Enter UserName" onChange={handleChange} />
                <br />
                <input type="text" title="email" value={user.email} placeholder="Enter Email" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}