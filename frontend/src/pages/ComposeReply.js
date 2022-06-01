import React from 'react'
import Header from './components/Header'
import {POST} from './utility/fetch'
import { useEffect,useState } from 'react'
import ComposeFormReply from './components/ComposeFormReply'

let name=''
const ComposeReply = () => {
    let id=localStorage.getItem('id')
    const [mails,setMails]=useState([])


    let getMails=async ()=>{
        let data1={
            "id":id
        }
        let response1=await POST('find/',data1)
        name=response1['name']
        setMails()      
    }
    
    useEffect(()=>{
        getMails()
    },[])
    
  return (
    <div>
        <Header name={name}/>
        <h1>Compose</h1>
        <ComposeFormReply name={name}/>
    </div>
  )
}

export default ComposeReply