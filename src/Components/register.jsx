import React from 'react'
import Userfront from "@userfront/react";
import './register.css'

Userfront.init("rbv5qpjn");

const SignupForm = Userfront.build({
  toolId: "ordrrbl"
});

const Register = () => {
  return (
    <>
      <h1>Register</h1>
      <div className='signup'>
        <SignupForm />
      </div>
    </>
  )
}

export default Register