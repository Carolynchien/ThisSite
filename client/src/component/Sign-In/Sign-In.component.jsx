import { useState } from 'react'
import axios from 'axios'

const initSignInfo = {
  userName: '',
  password: ''
}

const SignIn = () => {
  const [userInfo, setUserInfo] = useState(initSignInfo)
  const { userName, password } = userInfo

  const handleChange = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target
    setUserInfo({ ...userInfo, [name]: value })
  }

  const getUser = async (e) => {
    e.preventDefault()
    console.log(userInfo)
    const getUser = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/login`,
      userInfo
    )
    console.log(getUser)
  }

  return (
    <div className="sign-container">
      <h1>Please sign in</h1>
      <form onSubmit={getUser}>
        <div className="input-container">
          <label>Username:</label>
          <input
            type="text"
            onChange={handleChange}
            name="userName"
            value={userName}
          />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input
            type="password"
            required
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default SignIn
