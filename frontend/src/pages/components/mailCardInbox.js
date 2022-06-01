import React from 'react'

const mailCard = ({mail}) => {

    let timestamp= new Date(mail.timestamp)
    let date=timestamp.toUTCString()

    let handleClick=()=>{
      localStorage.setItem('key',mail.id)
      localStorage.setItem('recipient',mail.recipient)
      window.location.href='/detail'
    }
    
    
    if (mail['read']===false){
      return (
        <div className='card' key={mail.id} onClick={()=>handleClick()}>
            <h3>{mail.subject}</h3>
            <span style={{marginTop:"10px"}}>
                <p>From: {mail.sender}</p>
                <p>{date}</p>
            </span>
        </div>
      )
    }
    else{
      return (
        <div className='card' key={mail.id} style={{"background":"#D5D4D3"}} onClick={()=>handleClick()}>
            <h3>{mail.subject}</h3>
            <span style={{marginTop:"10px"}}>
                <p>From: {mail.sender}</p>
                <p>{date}</p>
            </span>
        </div>
      )
    }
    
}

export default mailCard