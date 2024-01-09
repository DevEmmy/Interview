import React, { useState } from 'react'
import { login } from '../requests/request';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState()

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }

    const submitForm = (e)=>{
      e.preventDefault()
      let data = {email, password}
      login(data)
    }
  return (
    <div className='flex flex-col items-center justify-center mt-20 w-1/3 m-auto gap-5 border border-blue-400 px-10 py-20 rounded-lg shadow-2xl'>
       <div className='text-center'>
       <h2 className='text-[48px]'>Login</h2>
        <p>Login as an Administrator</p>
       </div>

        <form action="" className='flex flex-col gap-6'>
            <input type="email" placeholder='email' value={email} onChange={handleEmail}/>
            <input type="text" placeholder='password' value={password} onChange={handlePassword}/>

            <button type="submit" onClick={submitForm} className='w-full bg-blue-400 text-white py-3 rounded-md'>log in</button>
        </form>
    </div>
  )
}

export default Login