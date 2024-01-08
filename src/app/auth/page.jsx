"use client"
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Auth() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    // console.log(e.target);
    const data = {
      'username': username,
      'email': email,
      'pass': pass,
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    })

    if(response.ok) {
      router.push('/');
    }
    console.log(response);
  }


  return (
    <main className='mx-auto h-4/5'>
      <div className='flex justify-center items-center w-full h-full'>
        <div className='rounded-xl w-1/2 h-1/2 flex flex-col justify-center items-center border-2 border-gray-500'>
          <div className='flex flex-col justify-center items-center'>
            <form className='text-center' onSubmit={(e) => onSubmit(e)}>
              <label>
                <span>Username: </span> <br />
                <input
                  required
                  type="text"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label> <br />
              <label>
                <span>E-mail: </span> <br />
                <input
                  required
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label> <br />
              <label>
                <span>Password: </span> <br />
                <input
                  required
                  type="password"
                  name="pass"
                  onChange={(e) => setPass(e.target.value)}
                />
              </label> <br /> <br />
              <label className='flex flex-col justify-center items-center'>
                <button className='btn-add'>
                  Register
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
