import React from 'react'
import Header from './components/Header'
import {useEffect,useState} from 'react'
import {POST} from './utility/fetch'


const DetailView = () => {
    let key=localStorage.getItem('key')
    let name=localStorage.getItem('recipient')
    let sent=localStorage.getItem('sent')
    console.log(sent)
    const [mail,setMail]=useState({})
    
    let timestamp= new Date(mail.timestamp)
    let date=timestamp.toUTCString()
    
    let HandleArchive=async ()=>{
        let data={
            "id":key,
            "recipient":name,
            "archived":true
        }
        await POST('emailArchive/',data)
        window.location.href='/archived'
    }
    let HandleUnArchive=async ()=>{
        let data={
            "id":key,
            "recipient":name,
            "archived":false
        }
        let response=await POST('emailArchive/',data)
        window.location.href='/inbox'
    }

    let getMail=async ()=>{
        let data={
            "id":key,
            "recipient":name
        }
        let response=await POST('emailDetailview/',data)
        setMail(response[0])

        let response1=await POST('emailRead/',data)
        
    }
    let HandleReply=async ()=>{
        localStorage.setItem("recipient",mail.sender)
        localStorage.setItem("subject",mail.subject)
        localStorage.setItem("body",mail.body)
        localStorage.setItem("time",date)
        localStorage.setItem("sender",name)
        window.location.href='/reply'
    }
    useEffect(()=>{
        getMail()
    },[])

    
        return (
            <div>
                <Header name={mail.sender}/>
                <div className="mail">
                    <h1>{mail.subject}</h1>
                    <p><b>From</b>: {mail.sender} <b>on</b> {date}</p>
                    <p><b>To:</b> {mail.recipient}</p>
                    <br/>
                    <textarea className='content' value={mail.body} disabled></textarea>
                    <br/>
                    <span>          
                        <button className='button-3' onClick={()=>HandleReply()}>Reply</button>
                    </span>
                </div>
            </div>
        )
    
}

export default DetailView