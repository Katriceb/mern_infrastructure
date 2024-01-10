import React from 'react'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

function AuthPage(props) {
  return (
    <>
   <h1>Auth Page</h1>
   <SignUpForm setUser={props.setUser} />
   <LoginForm setUser={props.setUser} />
   </>
  )
}

export default AuthPage