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
    
    console.log(key,name)

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
    
    useEffect(()=>{
        getMail()
    },[])
  return (
    <div>
        <Header name={name}/>
        <div class="mail">
            <h1>{mail.subject}</h1>
            <p><b>From</b>: {mail.sender} <b>on</b> {date}</p>
            <p><b>To:</b> {mail.recipient}</p>
            <br/>
            <p className='content'>{mail.body}</p>
            


        </div>
    </div>

  )
}

export default DetailView