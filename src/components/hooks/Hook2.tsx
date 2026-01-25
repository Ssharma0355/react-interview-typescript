import React, { useEffect, useState } from "react";
interface detailInterface{
    id: number,
    name: string,
    email?:string
}

export const Hook2: React.FC=()=>{
    const [details, setDetails] = useState<detailInterface[]>([])
    useEffect(()=>{
        try{
            const getData =async () => {
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                const parsedJson = await res.json();
                setDetails(parsedJson)
            }
            getData();
        }
        catch(err){
        console.log(err)
        }
    },[])
    console.log(details);
    return(
        <div>
            {details.map((user)=>(
                <li key={user.id}>{user.id}
                <h2>{user.name}</h2>
                </li>
            ))}

        </div>
    )
}