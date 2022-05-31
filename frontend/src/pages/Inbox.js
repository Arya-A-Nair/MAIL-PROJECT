import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { POST } from './utility/fetch'


const Inbox = () => {
    let id=localStorage.getItem('id')
    const [name,setName]=useState("")
    
    let getName=async ()=>{
        let data={
            "id":id
        }
        let response=await POST('find/',data)
        setName(response['name'])
    }

    useEffect(()=>{
        getName()
    },[])
    
    


    return (
    <div>
        <h1>Inbox</h1>
        <p>{name}</p>
    </div>
    )
}

export default Inbox