import React from 'react'
import Header from './components/Header'
import {useEffect, useState} from 'react'
import {POST} from './utility/fetch'
import MailCardSent from './components/mailCardSent'


let name=""
const Sent = () => {
    let id=localStorage.getItem('id')
    const [mails,setMails]=useState([])
    

    let getMails=async ()=>{
        let data1={
            "id":id
        }
        let response1=await POST('find/',data1)
        name=response1['name']

        let data={
            "sender":name
        }
        let response=await POST('sent/',data)
        let responsereverse=response.reverse()
        setMails(responsereverse)    
    }


    useEffect(()=>{
        getMails()
    },[])
    return (
        <div>
            <Header name={name} />
            <h1>Sent</h1>
            <div className="mail-container">
                {mails.map(mail=><MailCardSent mail={mail} key={mail.id}/>)}
            </div>
        </div>
    )
}

export default Sent