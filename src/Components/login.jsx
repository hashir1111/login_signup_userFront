import React from 'react'
import Userfront from "@userfront/react";
import './login.css'

Userfront.init("rbv5qpjn");

const LoginForm = Userfront.build({
  toolId: "raoaalb"
});

const Login = () => {
  return (
    <>
      <h1>Login Form</h1>
      <div className='login'>
        <LoginForm />
      </div>
    </>
  )
}

export default Login