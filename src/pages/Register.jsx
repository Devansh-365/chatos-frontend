import React, { useState } from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: coloumn;
  justify-content: center;
`

const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = () => {
    event.preventDefault()
    alert('form')
  }

  return (
    <>
      <FormContainer>
        <form action="" onSubmit={handleSubmit}>
          <div className="brand">
            <h1>Chatos</h1>
          </div>
          <h5>Enter a Username</h5>
          <input 
          type="text" 
          placeholder='Username' name="username"
          onChange={(e) => setUsername(e.target.value)} />
          <h5>Enter a email</h5>
          <input 
          type="text" 
          placeholder='Email' name="username"
          onChange={(e) => setEmail(e.target.value)} />
          <h5>Enter a password</h5>
          <input 
          type="password" 
          placeholder='Password' 
          name="username"
          onChange={(e) => setPassword(e.target.value)} />
          <h5>Enter a confirm password</h5>
          <input 
          type="password" 
          placeholder='Confirm Password' name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)} />

          <button type='submit'>Create User</button>
          <span></span>
        </form>
      </FormContainer>
    </>
  )
}

export default Register