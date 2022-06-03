import React from 'react'
import { useRef } from 'react'
import { POST } from '../utility/fetch'

const ComposeForm = ({name}) => {
    let to=useRef("")
    let subject=useRef("")
    let body=useRef("")


    let handleSubmit=async ()=>{
        
        if (to.current.value!=="" && subject.current.value!=="" && body.current.value!==""){
            let data={
                "sender":name,
                "recipient":to.current.value+'@awesome.com',
                "subject":subject.current.value,
                "body":body.current.value
            }
            let response=await POST('compose/',data)
            if (response['status']){
                alert(response['message'])
                window.location.href="../sent/"
            }
            else{
                alert(response['message'])
            }
        }
        else{
            alert("Please fill all fields")
        }
        
        
    }



  return (
    <div >
        <div className='form'>
            <label>To:</label>
            {/* <input type="text" name="to" ref={to}/> */}
            <span className="Username">
                    <input type='text' style={{'width':'30%'}} ref={to} required/>
                    <label>@awesome.com</label>
            </span>
        
        
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