import React, { useState, useEffect } from 'react'
import Login from './Login'

import MDEditor from '@uiw/react-md-editor';

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  const [mk, setMk] = useState<string | undefined>("Hello");

  const hook = () => {
    const token = localStorage.getItem('mindrisers-login-token')
    if (token) setLoggedIn(() => true)
  }

  useEffect(hook, [])

  return (
    <>
      {loggedIn && (
        <main>
         <div className="w-[80%] mt-0 mx-auto h-screen">
          <MDEditor
            value={mk}
            onChange={setMk}
          />
          {/* <MDEditor.Markdown source={mk} /> */}
        </div>
        </main>
      )}
      {!loggedIn && (
        <Login loginSetter={setLoggedIn} />
      )}
    </>
  )
}

export default Admin
