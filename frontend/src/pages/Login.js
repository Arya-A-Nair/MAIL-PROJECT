import React from 'react'
import { useRef } from 'react'
import { POST } from './utility/fetch'


const Login = () => {
    const username = useRef()
    const password = useRef()

    const handleLogin = async () => {
      let data={
        name:username.current.value,
        password:password.current.value
    }
      let response=await POST('login/',data)
      console.log(response)
      if (response["status"]){
        console.log("You have successfully logged in")
        console.log(response)
        localStorage.setItem("id",response["id"])
        window.location.href='/inbox'
      }
      else{
        alert("Login failed")
        username.current.value=""
        password.current.value=""
      }
      
    }



  return (
    <div>
      <h1>Login</h1>
      <div className='form'>
        <label>Username:</label>
        <input type='text' placeholder='Username' ref={username} required/>

        <label>Password:</label>
        <input type='password' placeholder='Password' ref={password} required/>
      </div>

      <button className='button-3' type='submit'onClick={()=>handleLogin()}>Login</button>

      <h4>If you are new please <a href="/Register">Register</a></h4>
    </div>
  )
}

export default Login
