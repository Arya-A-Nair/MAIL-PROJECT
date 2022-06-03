import React from 'react'
import { useRef } from 'react'
import {POST} from './utility/fetch'

const Register = () => {
    const username = useRef()
    const password = useRef()
    const confirmPassword = useRef()

    const handleRegister=async ()=>{
        if (password.current.value!=="" && confirmPassword.current.value!=="" &&username.current.value!=="" ){
            if (password.current.value.length<6){
                alert("Password must be at least 6 characters long")
            }
            else if (password.current.value!==confirmPassword.current.value){
                alert('Passwords do not match')
                password.current.value=""
                confirmPassword.current.value=""
            }
            else{
                let name=username.current.value+"@awesome.com"
                let data={
                    name:name,
                    password:password.current.value
                }
                
                let response=await POST('register/',data)

                if (response["status"]===true){
                    username.current.value=""
                    password.current.value=""
                    confirmPassword.current.value=""
                    alert(response["message"])
                    window.location.href='/'
                }
                else{
                    console.log(response)
                    username.current.value=""
                    password.current.value=""
                    confirmPassword.current.value=""
                    alert(response["message"])
                }

            }
        }

        else{
            alert('Please fill all fields')
        }

    }


    return (
        <div>
            <h1>Register</h1>
            <div className='form'>
                <label>Username:</label>
                <span className="Username">
                    <input type='text'  placeholder='Username' style={{'width':'30%'}} ref={username} required/>
                    <label>@awesome.com</label>
                </span>

                <label>Password:</label>
                <input type='password' pattern=".{8,}"  placeholder='Password(more than 6 characters)' ref={password} required/>

                <label>Confirm Password:</label>
                <input type='password'  placeholder='Confirm Password' ref={confirmPassword} required />
            </div>
            <button className='button-3' type='submit' onClick={()=>handleRegister()}>Register</button>  
            <h4>If you already have an account <a href="/">Login</a></h4>
        </div>
    )
}

export default Register