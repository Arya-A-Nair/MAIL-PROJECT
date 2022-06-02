import React from 'react'
import { useRef } from 'react'
import {POST} from './utility/fetch'

const Register = () => {
    const username = useRef()
    const password = useRef()
    const confirmPassword = useRef()

    const handleRegister=async (e)=>{
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
            
            let response=await POST('register/',data)
            console.log(response)
            username.current.value=""
            password.current.value=""
            confirmPassword.current.value=""
            window.location.href='/'
        }

    }


    return (
        <form onSubmit={handleRegister()}>
            <h1>Register</h1>
            <div className='form'>
                <label>Username:</label>
                <input type='text'  placeholder='Username' ref={username} required/>

                <label>Password:</label>
                <input type='password'  placeholder='Password' ref={password} required/>

                <label>Confirm Password:</label>
                <input type='password'  placeholder='Confirm Password' ref={confirmPassword} required />
            </div>
            <button className='button-3' type='submit'>Register</button>  
            <h4>If you already have an account <a href="/">Login</a></h4>
        </form>
    )
}

export default Register