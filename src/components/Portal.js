import { useState } from 'react';

import Login from './Login';
import Signup from './Signup';

function Portal() {
  // State
  const [showLogin, setShowLogin] = useState(true)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  //Helper functions
  const toggleLoginSignup = () => { setShowLogin(!showLogin) }
  const submitForm = () => console.log(`Form is sent!\nusername: ${username}\npassword: ${password}`)

  // Render
  return (
    <>
      {showLogin
        ? <Login
          username={username}
          setPassword={setPassword}
          setUsername={setUsername}
          toggle={toggleLoginSignup}
          submitForm={submitForm}
        />

        : <Signup
          username={username}
          password={password}
          setPassword={setPassword}
          setUsername={setUsername}
          toggle={toggleLoginSignup}
          submitForm={submitForm}
        />
      }
    </>
  )
}

export default Portal