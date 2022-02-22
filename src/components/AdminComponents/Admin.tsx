import React, { useState, useEffect } from 'react'
import Login from './Login'

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(true)

  const hook = () => {
    const token = localStorage.getItem('mindrisers-login-token')
    if (token) setLoggedIn(() => true)
  }

  useEffect(hook, [])

  return (
    <>
      {loggedIn && (
        <main>
          Admin page
        </main>
      )}
      {!loggedIn && (
        <Login loginSetter={setLoggedIn} />
      )}
    </>
  )
}

export default Admin
