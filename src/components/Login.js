function Login({username, setUsername, setPassword, toggle, submitForm}){
  return (
    <form>

      <h1>Login</h1>

      <label>Username: </label>
      <input placeholder={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
      <br />
      <label>Password: </label>
      <input type="password" onChange={(e)=>{setPassword(e.target.value)}}></input>

      <a onClick={toggle}>Don't have an account?</a>
      <button type="button" onClick={submitForm}>Login</button>

    </form>
  )
}

export default Login;