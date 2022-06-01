import React from 'react'
import Header from './components/Header'
import {useEffect,useState} from 'react'
import {POST} from './utility/fetch'


const DetailView = () => {
    let key=localStorage.getItem('key')
    let name=localStorage.getItem('recipient')
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
        console.log(response1)
        
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
        <Header name={name}/>
        <div className="mail">
            <h1>{mail.subject}</h1>
            <p><b>From</b>: {mail.sender} <b>on</b> {date}</p>
            <p><b>To:</b> {mail.recipient}</p>
            <br/>
            <p className='content'>{mail.body}</p>

            <span>
            {mail.archived===false?<button className='button' onClick={()=>HandleArchive()}>Archive</button>:<button className='button' onClick={()=>HandleUnArchive()}>Unarchive</button>}
                
                <button className='button' onClick={()=>HandleReply()}>Reply</button>
            </span>
        </div>
    </div>

  )
}

export default DetailView