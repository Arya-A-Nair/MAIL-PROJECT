import React from 'react'
import { useRef } from 'react'
import axios from 'axios'

const Login = () => {
    const username = useRef()
    const password = useRef()

    const handleLogin = () => {
      
    }



  return (
    <div className='Login-box'>
      <h1>Login</h1>
      <input type='text' placeholder='Username' ref={username} />
      <input type='password' placeholder='Password' ref={password}/>
      <button onClick={()=>handleLogin()}>Login</button>

      <h4>If you are new please <a href="/Register">Register</a></h4>
    </div>
  )
}

export default Login
