import React from 'react'
import { useEffect, useState } from 'react'
import { POST } from './utility/fetch'


const Inbox = () => {
    const [id,setId]=useState(0)
    const [name,setName]=useState("")
    let getUser=()=>{
        let x=localStorage.getItem('id')
        console.log(x)
        setId(x)
    }

    let getName= async ()=>{
        let data={
            x:id
        }
        let response=await POST('find/',data)
        console.log(response)
    }
    useEffect(()=>{
        getUser()
        getName()
    },[])

    return (
    <div>
        <h1>Inbox</h1>
        <p>{id}</p>
    </div>
    )
}

export default Inbox