import React from 'react'
import {useState} from 'react'
import { POST } from '../utility/fetch'

const ComposeFormReply = () => {
    let recipient=localStorage.getItem('recipient')
    let subject=localStorage.getItem('subject')
    let date=localStorage.getItem('time')
    let name=localStorage.getItem('sender')
    let intro="On "+date+", "+name+" wrote: "

    if( subject.slice(0,4)!=='Re: '){
        subject='Re: '+subject
    }
    const [body,setBody]=useState("\n"+intro+localStorage.getItem('body')+"\n\nReply("+name+"): ")
    
    

    let handleSubmit=async ()=>{
        
        let data={
            "sender":name,
            "recipient":recipient,
            "subject":subject,
            "body":body
        }
        let response=await POST('compose/',data)
        if (response['status']){
            alert("Mail Sent")
            window.location.href="../sent/"
        
        }
        else{
            alert("Mail not sent")
        }
    }

  return (
    <div>
        <div className='form'>
            <label>To:</label>
            <input type="text" name="to" disabled value={recipient}/>

            <label>Subject:</label>
            <input type="text" name="subject" disabled value={subject}/ >

            <label>Body</label>
            <textarea name="body" value={body} onChange={(e)=>setBody(e.target.value)} rows='10'/>

        
            
        </div>  
            <button type="submit" onClick={()=>handleSubmit()} className="button-3  ">Send</button>
            
    
    </div>
  )
}

export default ComposeFormReply