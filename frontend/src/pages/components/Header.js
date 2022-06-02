import React from 'react'

const Header = ({name}) => {

    let handleLogout=()=>{
        localStorage.clear();
        window.location.href="/";
    }
    let inboxRedirect=()=>{
      window.location.href="../inbox/"
    }
    let composeRedirect=()=>{
      window.location.href="../compose/"
    }
    let sentRedirect=()=>{
      window.location.href="../sent/"
    }
    let archivedRedirect=()=>{
      window.location.href="../archived/"
    }


  return (
    <div>
        <h1>{name}</h1>
        <span>
        <button className='button-85' onClick={()=>inboxRedirect()}>Inbox</button>
        <button className='button-85' onClick={()=>composeRedirect()}>Compose</button>
        <button className='button-85' onClick={()=>sentRedirect()}>Sent</button>
        <button className='button-85' onClick={()=>archivedRedirect()}>Archived</button>
        <button className='button-85' onClick={()=>handleLogout()}>Log Out</button>
        </span>
    </div>
  )
}

export default Header