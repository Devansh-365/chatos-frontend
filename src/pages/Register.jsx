import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #F9F2ED;

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

const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('form')
  }

  return (
    <>
      <FormContainer>
        <form action="" onSubmit={handleSubmit}>
          <div className="brand">
            <h1>Register</h1>
          </div>
          <div className="inputs">
            <h5>Enter a Username</h5>
            <input 
            type="text" 
            name="username"
            onChange={(e) => setUsername(e.target.value)} />
            <h5>Enter a email</h5>
            <input 
            type="text" 
            name="username"
            onChange={(e) => setEmail(e.target.value)} />
            <h5>Enter a password</h5>
            <input 
            type="password" 
            name="username"
            onChange={(e) => setPassword(e.target.value)} />
            <h5>Enter a confirm password</h5>
            <input 
            type="password" 
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type='submit'>Create User</button>
          <span>Already have an account ? <Link to="/login">Login</Link></span>
        </form>
      </FormContainer>
    </>
  )
}

export default Register