'use client'  
import React, { useEffect } from 'react'
import { useState } from 'react'

const page = () => {

  const API_URL = "http://localhost:3001"

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [profileImg, setProfileImg] = useState('')

  // Method to register a user 
  const register = async (e) => {
    e.preventDefault()
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName, lastName, username, email, password, profileImg
      })
    })
    const content = await response.json()
    console.log(content)
  }
  

  return (
    <div >
      <button
        className="btn btn-primary bg-red-600 hover:bg-red-700 m-1 p-2 rounded text-white font-bold"
        onClick={register}
      >
        Register
      </button>
    </div>
  )
}

export default page