import React from 'react'
import { useRef } from 'react'
import {POST} from './utility/fetch'

const Register = () => {
    const username = useRef()
    const password = useRef()
    const confirmPassword = useRef()

    const handleRegister=async ()=>{
        if (password.current.value!==confirmPassword.current.value){
            alert('Passwords do not match')
            password.current.value=""
            confirmPassword.current.value=""
        }
        else{
            let data={
                name:username.current.value,
                password:password.current.value
            }
            
            // let headersList = {
            //     "Accept": "*/*",
            //     // "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            //     "Content-Type": "application/json"
            //    }
            // fetch("http://127.0.0.1:8000/api/register/",{
            //     method:"POST",
            //     headers:headersList,
            //     body:JSON.stringify(data)
            // })

            let response=await POST('register/',data)
            
            console.log(response)
            

            
        }

    }


    return (
        <div>
            <h1>Register</h1>
            <input type='text' placeholder='Username' ref={username}/>
            <input type='password' placeholder='Password' ref={password} />
            <input type='password' placeholder='Confirm Password' ref={confirmPassword} />
            <button onClick={()=>handleRegister()}>Register</button>  
            <h4>If you already have an account <a href="/">Login</a></h4>
        </div>
    )
}

export default Register