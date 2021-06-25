import { useState } from "react";

function Signup({ username, password, setPassword, setUsername, toggle, submitForm }) {
  // State
  const [confirmPassword, setConfirmPassword] = useState()
  const [failMessage, setFailMessage] = useState("")
  // Helper Function
  const confirmAndSend = () => {
    if (password == confirmPassword) {
      submitForm()
    } else {
      setFailMessage("The Passwords don't match")
      setTimeout(() => { setFailMessage("") }, 4000)
    }
  }

  // Render
  return (
    <form>
      <h1>Signup</h1>

      <label>Username: </label>
      <input placeholder={username} onChange={(e) => { setUsername(e.target.value) }}></input>
      <br />
      <label>Password: </label>
      <input type="password" onChange={(e) => { setPassword(e.target.value) }}></input>
      <p>{failMessage}</p>
      <label>Confirm: </label>
      <input type="password" onChange={(e) => { setConfirmPassword(e.target.value) }}></input>
      <br />

      <a onClick={toggle}>Already have an account?</a>
      <button type="button" onClick={confirmAndSend}>Signup</button>
    </form>
  )
}

export default Signup;