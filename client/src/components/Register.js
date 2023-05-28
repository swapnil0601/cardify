'use client'
import React, { useState } from 'react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImg, setProfileImg] = useState('');

  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      username,
      email,
      password,
      profileImg,
    };

    const API_URL = 'http://localhost:3001';

    fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'User registered successfully') {
          setMessage('');
          window.location.href = '/login';
        } else {
          setMessage('Username and email must be unique');
          setFirstName('');
          setLastName('');
          setPassword('');
          setProfileImg('');
          setEmail('');
          setUsername('');
        }
      }
      );
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Register Page</h2>
      <div className="w-64">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-400 rounded placeholder-black"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-400 rounded placeholder-black"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-400 rounded placeholder-black"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-400 rounded placeholder-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-400 rounded placeholder-black"
        />
        {/* Upload profile image */}
        <input
          type='file'
          placeholder="Profile Image URL"
          value={profileImg}
          onChange={(e) => setProfileImg(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-400 rounded placeholder-black"
        />
        <button
          onClick={handleRegister}
          className="w-full py-2 text-white bg-blue-500 rounded placeholder-black"
        >
          Register
        </button>

        <div className="mt-4">
          {message && <p className="text-red-500">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
