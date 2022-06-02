import React from 'react'
import Header from './components/Header'
import {POST} from './utility/fetch'
import {useEffect,useState} from 'react'
import MailCard from './components/mailCardInbox'

let name=""
const Archived = () => {
    let id=localStorage.getItem('id')
    const [mails,setMails]=useState([]);
    

    let getMails=async ()=>{
      let data1={
          "id":id
      }
      let response1=await POST('find/',data1)
      name=response1['name']

      let data={
          "recipient":name
      }
      let response=await POST('archive/',data)
      let responsereverse=response.reverse()
      
      setMails(responsereverse)      
  }


useEffect(()=>{
    getMails()
},[])
  
  return (
    <div>
      <Header name={name}/>
      <h1>Archived</h1>
      <div className="mail-container">
        {mails.map(mail=><MailCard mail={mail} key={mail.id}/>)}
      </div>
    </div>
  )
}

export default Archived