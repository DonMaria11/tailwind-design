import React,{useEffect,useState} from 'react'
import axios from "axios"

export default function api() {
    const [users,setUsers]=useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response= await axios.get('https://fakestoreapi.com/products');
                setUsers(response.data);
            }catch (err){
                console.log(err)
            }
        }
        fetchData() 
    })
  return (
    {users.map((item:any) =>{
        <>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.description}</div>
        <div>{item?.category}</div>
        </>
    })}
  )
}

