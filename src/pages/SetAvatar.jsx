import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { setAvatarRoute } from '../utils/APIRoutes';
import axios from 'axios'
import { Buffer } from "buffer";

const Container = styled.div`
  background-color: #131324;
  height: 100vh;
  width: 100vw;
  text-align: center;
  display:flex;
  justify-content: center;
  align-items: center;

  .container {
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    background-color: #FFFFFF;
    border: 1px solid #FC9918; 
    box-shadow: 5px 5px 0px #35589A, 10px 10px 0px #F14A16, 15px 15px 0px #FC9918;
    border-radius: 10px;
    padding: 80px 100px;

    @media (max-width: 1030px) {
        padding: 30px 30px; 
        margin: auto 15px;      
    }

    .title-container{
      font-weight: 400;
      font-size: 20px;
      font-family: 'Teko', sans-serif;
      font-style: normal;

      @media (max-width: 650px) {
        font-size: 15px;
          
      }
    }

    .avatars {
      display: grid;
      grid-template-columns: auto auto auto auto;
      gap: 2rem;

      @media (max-width: 650px) {
        grid-template-columns: auto auto;
          
      }

      .avatar {
        border: 0.4rem solid transparent;
        padding: 0.8rem;
        border-radius: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s ease-in-out;
        background-color: #131324;
        img {
          height: 6rem;
          transition: 0.5s ease-in-out;

          @media (max-width: 650px) {
            height: 5rem;         
          }
        }
      }

      .selected {
        border: 0.4rem solid #4e0eff;
      }
    }

    .submit-btn {
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
  }

`

const SetAvatar = () => {
  const navigate = useNavigate();

  const [avatars, setAvatars] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedAvatar, setSelectedAvatar] = useState(undefined)

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  }

  const setProfilePicture = async () => {
    if(selectedAvatar === undefined) {
      toast.error("Please select an avatar", toastOptions)
    } else {

    }
  }

  useEffect(() => {
    const data = [];
    for (let i = 0; i < 4; i++) {
      const image = `https://avatars.dicebear.com/api/human/${Math.floor(Math.random() * 1000)}.svg`
      data.push(image);
    }
    setAvatars(data);
    setIsLoading(false);
  }, [])

  return (
    <Container>
      <div className='container'>
        <div className="title-container">
          <h1>Pick an avatar as your profile picture</h1>
        </div>
        <div className="avatars">
          {avatars.map((avatar,index) => {
            return (
              <div
               key={index}
               className={`avatar ${
                selectedAvatar === index ? "selected" : ""
              }`}>
                <img 
                  src={avatar}
                  alt="avatar" 
                  onClick={() => setSelectedAvatar(index)} />
              </div>
            )
          })}
        </div>
        <button onClick={setProfilePicture} className="submit-btn">
            Set as Profile Picture
        </button>
        <ToastContainer />
      </div>
    </Container>
  )
}

export default SetAvatar