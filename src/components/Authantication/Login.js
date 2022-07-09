import React from 'react'
import '../../style/Login.css'
import { loginUrl } from './spotifyAuth'

const Login = () => {
  return (
    <div className='Login'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Spotify_logo_horizontal_black.jpg/1280px-Spotify_logo_horizontal_black.jpg" alt="fdsf" />
        <a href={loginUrl}> Login with the spotify app</a>
    </div>
  )
}

export default Login