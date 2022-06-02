import React from 'react'

const mailCardSent = ({mail}) => {
    
    let timestamp= new Date(mail.timestamp)
    let date=timestamp.toUTCString()

    
    let handleClick=()=>{
        localStorage.setItem('key',mail.id)
        localStorage.setItem('recipient',mail.recipient)
        localStorage.setItem('sent',true)
        window.location.href='/detailsent'
      }
      

    return (
        <div className='card' key={mail.id} onClick={()=>handleClick()} >
            <h3>{mail.subject}</h3>
            <span style={{marginTop:"10px"}}>
                <p>To: {mail.recipient}</p>
                <p>{date}</p>
            </span>
        </div>
    )
}

export default mailCardSent