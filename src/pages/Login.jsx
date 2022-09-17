import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { loginRoute } from '../utils/APIRoutes';

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #35589A;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    
    h1{
      font-weight: 400;
      font-size: 60px;
      font-family: 'Teko', sans-serif;
      font-style: normal;
    }
  }
  form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      background-color: #FFFFFF;
      border: 1px solid #FC9918; 
      box-shadow: 5px 5px 0px #35589A, 10px 10px 0px #F14A16, 15px 15px 0px #FC9918;
      border-radius: 10px;
      padding: 80px 100px;

      @media (max-width: 480px) {
        padding: 40px 50px;
        
      }

      input {
        background-color: #F9F2ED;
        border-radius: 10px;
        min-width: 247px;
        min-height: 45px;
        margin-bottom: 1rem;
        border-style:none;

        &:nth-child(2) {
          border-bottom: 5px solid #370665;
        }

        &:nth-child(4) {
          border-bottom: 5px solid #35589A;
        }

        &:nth-child(6) {
          border-bottom: 5px solid #F14A16;
        }

        &:nth-child(8) {
          border-bottom: 5px solid #FC9918;
        }
      }

      .inputs{

        h5{
          margin-bottom: 0.2rem;
          font-weight: 400;
          font-family: 'Armata', sans-serif;
          font-style: normal;
        }
      }

      button {
        font-weight: 400;
        font-size: 30px;
        font-family: 'Teko', sans-serif;
        font-style: normal;
        background: #F9F2ED;
        box-shadow: 2px 2px 0px #FC9918, 4px 4px 0px #F14A16, 6px 6px 0px #35589A;
        border-radius: 10px;
        padding: 5px 25px;
        margin-top: 10px;
        cursor: pointer;
      }

      span{
          font-weight: 400;
          font-family: 'Armata', sans-serif;
          font-style: normal;
          margin-top: 1rem;
      }
    }
`

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  }

  const handleValidation = () => {
    if(password.length < 8) {
      toast.error('Password should be greater than 8 characters', toastOptions)
      return false
    } else if(email === '') {
      toast.error('Email is required', toastOptions)
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(handleValidation()) {
      console.log("in validation: ", loginRoute)
      const data = { email, password}
      const response = await fetch(loginRoute , {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
      if(!response.ok) {
        toast.error(json.msg, toastOptions)
      }
      if(response.ok) {
        setEmail('')
        setPassword('')
        localStorage.setItem("chat-app-user", JSON.stringify(json))
        navigate("/")
      }
    }
  }

  return (
    <>
    <FormContainer>
        <form onSubmit={handleSubmit}>
          <div className="brand">
            <h1>Login</h1>
          </div>
          <div className="inputs">
            <h5>Enter a email</h5>
            <input 
            type="text" 
            name="password"
            onChange={(e) => setEmail(e.target.value)} />
            <h5>Enter a password</h5>
            <input 
            type="password" 
            name="confirmPassword"
            onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type='submit'>Login</button>
          <span>Didn't have an account ? <Link to="/register">Register</Link></span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  )
}

export default Login