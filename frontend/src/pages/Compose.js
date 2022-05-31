import React from 'react'
import Header from './components/Header'
import {useEffect,useState} from 'react'
import {POST} from './utility/fetch'
import ComposeForm from './components/ComposeForm'


let name=""
const Compose = () => {
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
        <Header name={name} />
        <h1>Compose</h1>
        <ComposeForm name={name}/> 
    </div>
  )
}

export default Compose