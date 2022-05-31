import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { POST } from './utility/fetch'
import Header from './components/Header'
import MailCard from './components/mailCardInbox'


let name=""
const Inbox = () => {
    let id=localStorage.getItem('id')
    const [mails,setMails]=useState([])
    

    let getMails=async ()=>{
        let data1={
            "id":id
        }
        let response1=await POST('find/',data1)
        name=response1['name']

        let data={
            "recipient":name
        }
        let response=await POST('inbox/',data)
        let responsereverse=response.reverse()
        
        setMails(responsereverse)      
    }


    useEffect(()=>{
        getMails()
    },[])
    
    return (
    <div>
        <Header name={name} />
        <h1>Inbox</h1>
        {mails.map(mail=><MailCard mail={mail} key={mail.id}/>)}
    </div>
    )
}

export default Inbox