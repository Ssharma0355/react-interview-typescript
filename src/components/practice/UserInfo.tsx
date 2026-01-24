import React, { useEffect, useState } from "react";

interface UserInterface{
    id?:number,
    name:string,
    username:string,
    email:string
}

export const UserInfo: React.FC=()=>{
    const [users, setUser] = useState<UserInterface[]>([]);
    const [loading, setLoading] = useState<boolean | null>(true);
    const API_KEY="https://jsonplaceholder.typicode.com/users";
    useEffect( ()=>{
        try{
            const getUser = async()=>{
                const response = await fetch(API_KEY)
                const responseJson = await response.json()
                setUser(responseJson)
                console.log(users)
            }
            getUser();
        }
       
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }

    },[])

    if(loading === true){
       return <h1>Loading....</h1>
    }

    return(
        <div>
            {users.map((user)=>(
                <li key={user.id}>
                    <h1>{user.name}</h1>
                </li>
            ))}

        </div>
    )

}