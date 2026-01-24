import axios from "axios";
import React, { useState } from "react";
interface userDetailInterface{
    name:string,
    email:string
}

export const AddUser: React.FC=()=>{
    const [userDetail, setUserDetail] = useState<userDetailInterface>({
        name:"", email:""
    })
    const[responseAPi, setResponseApi] = useState<[]>([]);

    const handleUser=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {title, value} = e.target
        setUserDetail((prev)=>({
            ...prev,
            [title]:value
        }))
    }

    const addUser=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            const postData = async()=>{
                const response = await axios.post("https://jsonplaceholder.typicode.com/users",{
                    name: userDetail.name,
                    email: userDetail.email
                })
                setResponseApi(response.data)
                console.log(response.data)
                setUserDetail({name:"",email:""})
            }
            postData();
        }
        catch(err){
            console.log(err)

        }

    }
    return(
        <form onSubmit={addUser}>
            <input type="text"
            title="name"
             value={userDetail.name} 
             placeholder="Enter name"
             onChange={handleUser} />

            <br />

            <input type="text"
            title="email"
            value={userDetail.email}
            placeholder="Enter email"
            onChange={handleUser} />

            <button type="submit">Submit</button>
        </form>
    )
}