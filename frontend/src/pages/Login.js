import React from 'react'
import { useRef } from 'react'
import { POST } from './utility/fetch'


const Login = () => {
    const username = useRef()
    const password = useRef()

    const handleLogin = async () => {
        if (username.current.value !== "" && password.current.value !== "") {
          let name=username.current.value+"@awesome.com"
          let data={
            name:name,
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
          else if (response["status"]===false){
            alert(response["message"])
          }
        }
        else{
          alert("Please fill all fields")
        }
      
    }



  return (
    <div>
      <h1>Login</h1>
      <div className='form'>
        <label>Username:</label>
        <span className="Username">
                    <input type='text'  placeholder='Username' style={{'width':'30%'}} ref={username} required/>
                    <label>@awesome.com</label>
        </span>

        <label>Password:</label>
        <input type='password' placeholder='Password' ref={password} required/>
      </div>

      <button className='button-3' type='submit'onClick={()=>handleLogin()}>Login</button>

      <h4>If you are new please <a href="/Register">Register</a></h4>
    </div>
  )
}

export default Login
