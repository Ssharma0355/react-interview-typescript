import { response } from "express";
import React, { useEffect, useState } from "react";

interface Person {
    id: number;
    name: string;
    email: string;
  }
  

export const PersonInfo: React.FC =()=>{
    const [info, setInfo] = useState<Person[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const getData = async()=>{
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const jsonData:Person[] = await response.json()
            setInfo(jsonData)
        }
            catch(err){
            console.log("Error: ",err)
            }
            finally{
                setLoading(false)
            }
    }
    getData();
    },[])
    if (loading) {
        return <h2>Loading...</h2>;
      }
    return(
        <>
        <h1>Person Info</h1>
        {info.map((user)=>(
            <li key={user.id}>
                <h1>{user.name}</h1>
            </li>
        ))}
        </>
    )
}