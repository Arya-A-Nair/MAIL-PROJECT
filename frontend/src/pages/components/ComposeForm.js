import React from 'react'
import { useRef } from 'react'
import { POST } from '../utility/fetch'

const ComposeForm = ({name}) => {
    let to=useRef("")
    let subject=useRef("")
    let body=useRef("")


    let handleSubmit=async ()=>{
        
        let data={
            "sender":name,
            "recipient":to.current.value,
            "subject":subject.current.value,
            "body":body.current.value
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
    <div >
        <div className='form'>
            <label>To:</label>
            <input type="text" name="to" ref={to}/>
        
        
            <label>Subject:</label>
            <input type="text" name="subject"     ref={subject}/ >

            <label>Body</label>
            <textarea name="body" ref={body}/>
        </div>

        
            
            <button type="submit" className='button-3' onClick={()=>handleSubmit()}>Send</button>
            
        
    </div>
  )
}

export default ComposeForm