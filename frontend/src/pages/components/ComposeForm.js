import React from 'react'
import { useRef } from 'react'

const ComposeForm = () => {
    let to=useRef("")
    let subject=useRef("")
    let body=useRef("")


    let handleSubmit=(e)=>{
        e.preventDefault()
        let data={
            "recipient":to.current.value,
            "subject":subject.current.value,
            "body":body.current.value
        }
        console.log(data)
    }



  return (
    <form onSubmit={()=>handleSubmit()}>
        <div className='form'>
            <label>To:</label>
            <input type="text" name="to" ref={to}/>
        
        
            <label>Subject:</label>
            <input type="text" name="subject"  ref={subject}/>

            <label>Body</label>
            <textarea name="body" ref={body}/>

        </div>
            
            <button type="submit">Send</button>
            
        
    </form>
  )
}

export default ComposeForm